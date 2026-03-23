(function() {
  function createMetricLines(metrics) {
    var order = [
      { key: 'psnr', label: 'PSNR', digits: 2 },
      { key: 'ssim', label: 'SSIM', digits: 3 },
      { key: 'lpips', label: 'LPIPS', digits: 3 },
      { key: 'fps', label: 'FPS', digits: 0 }
    ];

    return order.map(function(item) {
      var value = metrics && typeof metrics[item.key] === 'number' ? metrics[item.key] : null;
      var formatted;

      if (value === null) {
        formatted = '--';
      } else if (item.key === 'fps') {
        formatted = Math.round(value).toString();
      } else {
        formatted = value.toFixed(item.digits);
      }

      return '<span class="scene-compare-metrics__line"><span class="scene-compare-metrics__value">' +
        formatted + '</span><span class="scene-compare-metrics__label">' + item.label + '</span></span>';
    }).join('');
  }

  function safePlay(video) {
    var promise = video.play();
    if (promise && typeof promise.catch === 'function') {
      promise.catch(function() {});
    }
  }

  function createSyncController(leftVideo, rightVideo) {
    var desiredPlaying = true;
    var blockedLeft = true;
    var blockedRight = true;
    var syncingFrame = null;
    var internalUpdate = false;

    function stopSyncLoop() {
      if (syncingFrame) {
        window.cancelAnimationFrame(syncingFrame);
        syncingFrame = null;
      }
    }

    function syncTimes(force) {
      if (!leftVideo.currentSrc || !rightVideo.currentSrc) {
        return;
      }

      if (force || Math.abs(leftVideo.currentTime - rightVideo.currentTime) > 0.04) {
        try {
          rightVideo.currentTime = leftVideo.currentTime;
        } catch (error) {}
      }
    }

    function startSyncLoop() {
      if (syncingFrame) {
        return;
      }

      function step() {
        if (!desiredPlaying) {
          syncingFrame = null;
          return;
        }

        syncTimes(false);
        syncingFrame = window.requestAnimationFrame(step);
      }

      syncingFrame = window.requestAnimationFrame(step);
    }

    function pauseBoth() {
      internalUpdate = true;
      leftVideo.pause();
      rightVideo.pause();
      internalUpdate = false;
      stopSyncLoop();
    }

    function tryResume(forceSync) {
      if (!desiredPlaying || blockedLeft || blockedRight) {
        return;
      }

      internalUpdate = true;
      if (forceSync) {
        syncTimes(true);
      }
      safePlay(leftVideo);
      syncTimes(true);
      safePlay(rightVideo);
      internalUpdate = false;
      startSyncLoop();
    }

    function markBlocked(side, blocked) {
      if (side === 'left') {
        blockedLeft = blocked;
      } else {
        blockedRight = blocked;
      }

      if (blocked) {
        pauseBoth();
      } else {
        tryResume(true);
      }
    }

    ['loadeddata', 'canplay', 'playing'].forEach(function(eventName) {
      leftVideo.addEventListener(eventName, function() {
        markBlocked('left', false);
      });
      rightVideo.addEventListener(eventName, function() {
        markBlocked('right', false);
      });
    });

    ['waiting', 'stalled', 'emptied'].forEach(function(eventName) {
      leftVideo.addEventListener(eventName, function() {
        markBlocked('left', true);
      });
      rightVideo.addEventListener(eventName, function() {
        markBlocked('right', true);
      });
    });

    leftVideo.addEventListener('play', function() {
      if (internalUpdate) {
        return;
      }
      desiredPlaying = true;
      tryResume(true);
    });

    leftVideo.addEventListener('pause', function() {
      if (internalUpdate) {
        return;
      }
      desiredPlaying = false;
      pauseBoth();
    });

    leftVideo.addEventListener('seeking', function() {
      syncTimes(true);
    });

    leftVideo.addEventListener('timeupdate', function() {
      syncTimes(false);
    });

    leftVideo.addEventListener('ratechange', function() {
      rightVideo.playbackRate = leftVideo.playbackRate;
    });

    return {
      setSources: function(leftSrc, rightSrc, posterSrc) {
        desiredPlaying = true;
        blockedLeft = true;
        blockedRight = true;
        stopSyncLoop();
        internalUpdate = true;
        leftVideo.pause();
        rightVideo.pause();
        leftVideo.currentTime = 0;
        rightVideo.currentTime = 0;
        leftVideo.src = leftSrc;
        rightVideo.src = rightSrc;
        leftVideo.poster = posterSrc;
        rightVideo.poster = posterSrc;
        leftVideo.load();
        rightVideo.load();
        internalUpdate = false;
      },
      pause: function() {
        desiredPlaying = false;
        pauseBoth();
      }
    };
  }

  function createCompareCard(viewConfig) {
    var card = document.createElement('article');
    card.className = 'scene-compare-card';
    card.setAttribute('data-n3d-card', viewConfig.key);
    card.innerHTML = [
      '<p class="scene-compare-caption">' + viewConfig.label + '</p>',
      '<div class="scene-compare-wrapper">',
      '  <div class="scene-compare-layer scene-compare-layer--base">',
      '    <video class="scene-compare-video scene-compare-video--right" autoplay muted loop playsinline preload="metadata"></video>',
      '    <div class="scene-compare-metrics scene-compare-metrics--right"></div>',
      '    <span class="scene-compare-badge scene-compare-badge--right"></span>',
      '  </div>',
      '  <div class="scene-compare-overlay" data-compare-overlay>',
      '    <div class="scene-compare-layer scene-compare-layer--overlay">',
      '      <video class="scene-compare-video scene-compare-video--left" autoplay muted loop playsinline preload="metadata"></video>',
      '      <div class="scene-compare-metrics scene-compare-metrics--left"></div>',
      '      <span class="scene-compare-badge scene-compare-badge--left"></span>',
      '    </div>',
      '  </div>',
      '  <div class="scene-compare-divider" data-compare-handle tabindex="0" role="slider" aria-label="Comparison slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">',
      '    <span class="scene-compare-handle"></span>',
      '  </div>',
      '</div>'
    ].join('');

    var wrapper = card.querySelector('.scene-compare-wrapper');
    var overlay = card.querySelector('[data-compare-overlay]');
    var divider = card.querySelector('[data-compare-handle]');
    var leftVideo = card.querySelector('.scene-compare-video--left');
    var rightVideo = card.querySelector('.scene-compare-video--right');
    var leftMetrics = card.querySelector('.scene-compare-metrics--left');
    var rightMetrics = card.querySelector('.scene-compare-metrics--right');
    var leftBadge = card.querySelector('.scene-compare-badge--left');
    var rightBadge = card.querySelector('.scene-compare-badge--right');
    var compareInteraction = typeof attachCompareInteraction === 'function' ? attachCompareInteraction(wrapper, overlay, divider) : null;
    var syncController = createSyncController(leftVideo, rightVideo);

    if (compareInteraction) {
      compareInteraction.setComparePosition(0.5);
    }

    return {
      element: card,
      setContent: function(content) {
        leftBadge.textContent = content.leftLabel;
        rightBadge.textContent = content.rightLabel;
        leftMetrics.innerHTML = createMetricLines(content.leftMetrics || {});
        rightMetrics.innerHTML = createMetricLines(content.rightMetrics || {});
        if (compareInteraction) {
          compareInteraction.setComparePosition(0.5);
        }
        syncController.setSources(content.leftVideo, content.rightVideo, content.poster);
      },
      pause: function() {
        syncController.pause();
      }
    };
  }

  function initN3DShowcase() {
    var root = document.querySelector('[data-n3d-showcase]');
    var data = window.N3D_SHOWCASE_DATA;
    var selector;
    var grid;
    var controllers = [];
    var buttons = [];
    var sceneLookup = {};
    var activeSceneKey = '';

    if (!root || !data || !data.scenes || !data.scenes.length) {
      return;
    }

    selector = root.querySelector('[data-n3d-selector]');
    grid = root.querySelector('[data-n3d-grid]');

    data.scenes.forEach(function(scene) {
      sceneLookup[scene.key] = scene;
    });

    data.viewOrder.forEach(function(viewConfig) {
      var controller = createCompareCard(viewConfig);
      controllers.push({ key: viewConfig.key, controller: controller });
      grid.appendChild(controller.element);
    });

    function activateScene(sceneKey) {
      var scene = sceneLookup[sceneKey];
      if (!scene) {
        return;
      }

      activeSceneKey = sceneKey;
      buttons.forEach(function(entry) {
        var isActive = entry.key === sceneKey;
        entry.button.classList.toggle('is-active', isActive);
        entry.button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      controllers.forEach(function(entry) {
        var content = scene.views[entry.key];
        if (content) {
          entry.controller.setContent(content);
        }
      });
    }

    data.scenes.forEach(function(scene, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'scene-selector__item' + (index === 0 ? ' is-active' : '');
      button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      button.setAttribute('data-scene-key', scene.key);
      button.innerHTML = [
        '<span class="scene-selector__preview" aria-hidden="true">',
        '  <img src="' + scene.thumb + '" alt="' + scene.label + ' thumbnail" loading="lazy" decoding="async">',
        '</span>',
        '<span class="n3d-scene-selector__label">' + scene.label + '</span>'
      ].join('');
      button.addEventListener('click', function() {
        activateScene(scene.key);
      });
      selector.appendChild(button);
      buttons.push({ key: scene.key, button: button });
    });

    activateScene(data.defaultScene || data.scenes[0].key);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initN3DShowcase, { once: true });
  } else {
    initN3DShowcase();
  }
})();
