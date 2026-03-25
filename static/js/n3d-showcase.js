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
    var promise;

    if (!video) {
      return;
    }

    promise = video.play();
    if (promise && typeof promise.catch === 'function') {
      promise.catch(function() {});
    }
  }

  function ensureVideoSource(videoElement, sourceElement, nextVideoPath) {
    if (!videoElement || !sourceElement || !nextVideoPath) {
      return false;
    }

    if (sourceElement.getAttribute('src') === nextVideoPath) {
      return false;
    }

    videoElement.preload = 'auto';
    sourceElement.setAttribute('src', nextVideoPath);
    sourceElement.setAttribute('data-src', nextVideoPath);
    videoElement.load();
    return true;
  }

  function createSyncController(leftVideo, rightVideo, leftSource, rightSource) {
    var desiredPlaying = false;
    var active = false;
    var internalUpdate = false;
    var suppressPauseHandlers = false;
    var suppressPauseTimer = null;
    var pendingMedia = null;

    function suppressPauseDuringSwitch() {
      suppressPauseHandlers = true;
      if (suppressPauseTimer) {
        window.clearTimeout(suppressPauseTimer);
      }
      suppressPauseTimer = window.setTimeout(function() {
        suppressPauseHandlers = false;
        suppressPauseTimer = null;
      }, 500);
    }

    function pauseVideos() {
      internalUpdate = true;
      leftVideo.pause();
      rightVideo.pause();
      internalUpdate = false;
    }

    function setVideoPreload(mode) {
      leftVideo.preload = mode;
      rightVideo.preload = mode;
    }

    function setPosters(posterSrc) {
      leftVideo.poster = posterSrc || '';
      rightVideo.poster = posterSrc || '';
    }

    function rememberPendingMedia(leftSrc, rightSrc, posterSrc) {
      pendingMedia = {
        leftSrc: leftSrc || '',
        rightSrc: rightSrc || '',
        posterSrc: posterSrc || ''
      };
      setPosters(posterSrc);
    }

    function getSharedDuration() {
      var leftDuration = leftVideo.duration;
      var rightDuration = rightVideo.duration;

      if (!isFinite(leftDuration) || !isFinite(rightDuration) || leftDuration <= 0 || rightDuration <= 0) {
        return null;
      }

      return Math.min(leftDuration, rightDuration);
    }

    function getLoopBoundary() {
      var sharedDuration = getSharedDuration();

      if (!sharedDuration) {
        return null;
      }

      return Math.max(sharedDuration - 1 / 30, 0);
    }

    function getSyncedTargetTime() {
      var boundary = getLoopBoundary();
      var targetTime = leftVideo.currentTime;

      if (boundary !== null) {
        targetTime = Math.min(targetTime, boundary);
      }

      return Math.max(0, targetTime);
    }

    function applyPlaybackRate() {
      var targetRate = leftVideo.playbackRate || 1;

      if (!isFinite(targetRate) || targetRate <= 0) {
        targetRate = 1;
      }

      rightVideo.playbackRate = targetRate;
    }

    function syncTimes(force) {
      var targetTime;

      if (!leftVideo.currentSrc || !rightVideo.currentSrc) {
        return;
      }

      targetTime = getSyncedTargetTime();
      if (force || Math.abs(targetTime - rightVideo.currentTime) > 0.12) {
        try {
          rightVideo.currentTime = targetTime;
        } catch (error) {}
      }
    }

    function restartSharedLoop() {
      if (!desiredPlaying || !active) {
        return false;
      }

      suppressPauseDuringSwitch();
      internalUpdate = true;
      try {
        leftVideo.currentTime = 0;
        rightVideo.currentTime = 0;
      } catch (error) {}
      safePlay(leftVideo);
      safePlay(rightVideo);
      internalUpdate = false;
      return true;
    }

    function maybeRestartSharedLoop() {
      var boundary = getLoopBoundary();

      if (boundary === null) {
        return false;
      }

      if (leftVideo.currentTime >= boundary || rightVideo.currentTime >= boundary) {
        return restartSharedLoop();
      }

      return false;
    }

    function startPlayback(forceSync) {
      if (!active || !desiredPlaying || leftVideo.readyState < 2 || rightVideo.readyState < 2) {
        return;
      }

      internalUpdate = true;
      if (forceSync) {
        syncTimes(true);
      }
      applyPlaybackRate();
      safePlay(leftVideo);
      syncTimes(true);
      safePlay(rightVideo);
      internalUpdate = false;
    }

    function commitPendingMedia(forceRestart) {
      var leftChanged;
      var rightChanged;

      if (!active || !pendingMedia || !pendingMedia.leftSrc || !pendingMedia.rightSrc) {
        return;
      }

      desiredPlaying = true;
      suppressPauseDuringSwitch();
      setVideoPreload('auto');
      internalUpdate = true;
      leftVideo.pause();
      rightVideo.pause();
      setPosters(pendingMedia.posterSrc);
      leftChanged = ensureVideoSource(leftVideo, leftSource, pendingMedia.leftSrc);
      rightChanged = ensureVideoSource(rightVideo, rightSource, pendingMedia.rightSrc);
      if (forceRestart || leftChanged || rightChanged || !leftVideo.currentSrc || !rightVideo.currentSrc) {
        try {
          leftVideo.currentTime = 0;
          rightVideo.currentTime = 0;
        } catch (error) {}
      }
      internalUpdate = false;
      window.requestAnimationFrame(function() {
        startPlayback(true);
      });
      window.setTimeout(function() {
        startPlayback(true);
      }, 180);
    }

    [leftVideo, rightVideo].forEach(function(video) {
      video.muted = true;
      video.defaultMuted = true;
      video.autoplay = false;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.addEventListener('loadeddata', function() {
        startPlayback(true);
      });
      video.addEventListener('canplay', function() {
        startPlayback(true);
      });
      video.addEventListener('timeupdate', function() {
        if (!internalUpdate) {
          maybeRestartSharedLoop();
        }
      });
      video.addEventListener('ended', function() {
        if (!internalUpdate) {
          restartSharedLoop();
        }
      });
    });

    leftVideo.addEventListener('play', function() {
      if (internalUpdate || !active) {
        return;
      }
      desiredPlaying = true;
      startPlayback(true);
    });

    leftVideo.addEventListener('pause', function() {
      if (internalUpdate || suppressPauseHandlers) {
        return;
      }
      if (maybeRestartSharedLoop()) {
        return;
      }
      desiredPlaying = false;
      pauseVideos();
    });

    rightVideo.addEventListener('pause', function() {
      if (internalUpdate || suppressPauseHandlers || !active || !desiredPlaying || leftVideo.paused) {
        return;
      }
      if (maybeRestartSharedLoop()) {
        return;
      }
      syncTimes(true);
      safePlay(rightVideo);
    });

    leftVideo.addEventListener('seeking', function() {
      syncTimes(true);
    });

    leftVideo.addEventListener('ratechange', function() {
      applyPlaybackRate();
    });

    return {
      setSources: function(leftSrc, rightSrc, posterSrc, shouldLoadImmediately) {
        rememberPendingMedia(leftSrc, rightSrc, posterSrc);

        if (shouldLoadImmediately) {
          active = true;
          commitPendingMedia(true);
          return;
        }

        desiredPlaying = false;
        setVideoPreload('metadata');
        pauseVideos();
      },
      setActive: function(nextActive) {
        active = !!nextActive;

        if (!active) {
          desiredPlaying = false;
          setVideoPreload('metadata');
          pauseVideos();
          return;
        }

        desiredPlaying = true;
        commitPendingMedia(false);
        startPlayback(true);
      },
      pause: function() {
        active = false;
        desiredPlaying = false;
        setVideoPreload('metadata');
        pauseVideos();
      }
    };
  }

  function createCompareCard(viewConfig, methodOrder) {
    var card = document.createElement('article');
    card.className = 'scene-compare-card';
    card.setAttribute('data-n3d-card', viewConfig.key);
    card.innerHTML = [
      '<div class="scene-compare-card__header">',
      '  <div class="scene-compare-card__eyebrow">' + viewConfig.label + '</div>',
      '  <div class="scene-compare-switcher">',
      '    <button class="scene-compare-nav" type="button" data-n3d-prev aria-label="Show previous baseline">&#10094;</button>',
      '    <div class="scene-compare-switcher__text">',
      '      <span class="scene-compare-switcher__ours">Ours</span>',
      '      <span class="scene-compare-switcher__vs">vs</span>',
      '      <span class="scene-compare-switcher__method" data-n3d-switch-label></span>',
      '    </div>',
      '    <button class="scene-compare-nav" type="button" data-n3d-next aria-label="Show next baseline">&#10095;</button>',
      '  </div>',
      '</div>',
      '<div class="scene-compare-wrapper">',
      '  <div class="scene-compare-layer scene-compare-layer--base">',
      '    <video class="scene-compare-video scene-compare-video--right" muted playsinline preload="metadata">',
      '      <source class="scene-compare-source scene-compare-source--right" type="video/mp4">',
      '    </video>',
      '    <div class="scene-compare-metrics scene-compare-metrics--right"></div>',
      '    <span class="scene-compare-badge scene-compare-badge--right"></span>',
      '  </div>',
      '  <div class="scene-compare-overlay" data-compare-overlay>',
      '    <div class="scene-compare-layer scene-compare-layer--overlay">',
      '      <video class="scene-compare-video scene-compare-video--left" muted playsinline preload="metadata">',
      '        <source class="scene-compare-source scene-compare-source--left" type="video/mp4">',
      '      </video>',
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
    var prevButton = card.querySelector('[data-n3d-prev]');
    var nextButton = card.querySelector('[data-n3d-next]');
    var switchLabel = card.querySelector('[data-n3d-switch-label]');
    var leftVideo = card.querySelector('.scene-compare-video--left');
    var rightVideo = card.querySelector('.scene-compare-video--right');
    var leftSource = card.querySelector('.scene-compare-source--left');
    var rightSource = card.querySelector('.scene-compare-source--right');
    var leftMetrics = card.querySelector('.scene-compare-metrics--left');
    var rightMetrics = card.querySelector('.scene-compare-metrics--right');
    var leftBadge = card.querySelector('.scene-compare-badge--left');
    var rightBadge = card.querySelector('.scene-compare-badge--right');
    var compareInteraction = typeof attachCompareInteraction === 'function' ? attachCompareInteraction(wrapper, overlay, divider) : null;
    var syncController = createSyncController(leftVideo, rightVideo, leftSource, rightSource);
    var currentScene = null;
    var activeMethodKey = methodOrder[0] ? methodOrder[0].key : '';
    var mediaEnabled = false;
    var layoutFrame = null;
    var lastKnownRatio = 1024 / 544;

    function getVideoRatio() {
      if (leftVideo.videoWidth && leftVideo.videoHeight) {
        return leftVideo.videoWidth / leftVideo.videoHeight;
      }

      if (rightVideo.videoWidth && rightVideo.videoHeight) {
        return rightVideo.videoWidth / rightVideo.videoHeight;
      }

      return lastKnownRatio;
    }

    function updateWrapperSize() {
      var availableWidth = card.clientWidth;
      var ratio = getVideoRatio();
      var isMobile = window.innerWidth <= 768;
      var minWidth = Math.min(availableWidth, isMobile ? 265 : 300);
      var minHeight = isMobile ? 176 : 198;
      var maxHeight = isMobile ? 300 : 340;
      var width;
      var height;

      if (!availableWidth || !ratio) {
        return;
      }

      lastKnownRatio = ratio;
      width = availableWidth;
      height = width / ratio;

      if (height > maxHeight) {
        height = maxHeight;
        width = height * ratio;
      }

      if (width < minWidth) {
        width = minWidth;
        height = width / ratio;
      }

      if (height < minHeight) {
        height = minHeight;
        width = height * ratio;
      }

      if (width > availableWidth) {
        width = availableWidth;
        height = width / ratio;
      }

      wrapper.style.width = Math.round(width) + 'px';
      wrapper.style.height = Math.round(height) + 'px';
    }

    function scheduleWrapperSize() {
      if (layoutFrame) {
        window.cancelAnimationFrame(layoutFrame);
      }

      layoutFrame = window.requestAnimationFrame(function() {
        layoutFrame = null;
        updateWrapperSize();
      });
    }

    function getAvailableMethods() {
      if (!currentScene || !currentScene.views || !currentScene.views[viewConfig.key]) {
        return [];
      }

      return methodOrder.filter(function(method) {
        return !!currentScene.views[viewConfig.key].baselines[method.key];
      });
    }

    function shiftMethod(direction) {
      var availableMethods = getAvailableMethods();
      var currentIndex;
      var nextIndex;

      if (!availableMethods.length) {
        return;
      }

      currentIndex = availableMethods.findIndex(function(method) {
        return method.key === activeMethodKey;
      });

      if (currentIndex === -1) {
        currentIndex = 0;
      }

      nextIndex = (currentIndex + direction + availableMethods.length) % availableMethods.length;
      activeMethodKey = availableMethods[nextIndex].key;
      renderContent(mediaEnabled);
    }

    function updateSwitcher(baseline) {
      var availableCount = getAvailableMethods().length;
      var disabled = availableCount <= 1;

      switchLabel.textContent = baseline ? baseline.label : '--';
      prevButton.disabled = disabled;
      nextButton.disabled = disabled;
    }

    function renderContent(shouldLoadMedia) {
      var sceneView;
      var baseline;
      var ours;
      var loadMedia = typeof shouldLoadMedia === 'boolean' ? shouldLoadMedia : mediaEnabled;

      if (!currentScene) {
        return;
      }

      sceneView = currentScene.views[viewConfig.key];
      if (!sceneView) {
        return;
      }

      ours = sceneView.ours;
      baseline = sceneView.baselines[activeMethodKey] || sceneView.baselines[currentScene.defaultMethod] || sceneView.baselines[methodOrder[0].key];
      if (!baseline) {
        return;
      }

      activeMethodKey = baseline.key;
      updateSwitcher(baseline);
      leftBadge.textContent = ours.label;
      rightBadge.textContent = baseline.label;
      leftMetrics.innerHTML = createMetricLines(ours.metrics || {});
      rightMetrics.innerHTML = createMetricLines(baseline.metrics || {});
      if (compareInteraction) {
        compareInteraction.setComparePosition(0.5);
      }
      scheduleWrapperSize();
      syncController.setSources(ours.video, baseline.video, sceneView.poster || currentScene.thumb, loadMedia);
    }

    prevButton.addEventListener('click', function() {
      shiftMethod(-1);
    });

    nextButton.addEventListener('click', function() {
      shiftMethod(1);
    });

    if (compareInteraction) {
      compareInteraction.setComparePosition(0.5);
    }

    leftVideo.addEventListener('loadedmetadata', scheduleWrapperSize);
    rightVideo.addEventListener('loadedmetadata', scheduleWrapperSize);
    window.addEventListener('resize', scheduleWrapperSize);
    scheduleWrapperSize();

    return {
      element: card,
      setScene: function(scene, shouldLoadMedia) {
        currentScene = scene;
        if (!(scene.views[viewConfig.key].baselines[activeMethodKey])) {
          activeMethodKey = scene.defaultMethod || methodOrder[0].key;
        }
        renderContent(shouldLoadMedia);
      },
      setMediaActive: function(nextActive) {
        mediaEnabled = !!nextActive;
        syncController.setActive(mediaEnabled);
      },
      pause: function() {
        mediaEnabled = false;
        syncController.pause();
      }
    };
  }

  function createDatasetSwitch(datasets, activeKey, onChange) {
    var root = document.createElement('div');
    var buttonMap = {};

    root.className = 'dataset-switcher';
    root.setAttribute('role', 'tablist');
    root.setAttribute('aria-label', 'Comparison dataset selector');

    datasets.forEach(function(dataset) {
      var button = document.createElement('button');
      var isActive = dataset.key === activeKey;
      button.type = 'button';
      button.className = 'dataset-switcher__button' + (isActive ? ' is-active' : '');
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
      button.textContent = dataset.label;
      button.addEventListener('click', function() {
        onChange(dataset.key);
      });
      root.appendChild(button);
      buttonMap[dataset.key] = button;
    });

    return {
      element: root,
      update: function(nextKey) {
        Object.keys(buttonMap).forEach(function(key) {
          var isActive = key === nextKey;
          buttonMap[key].classList.toggle('is-active', isActive);
          buttonMap[key].setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
      }
    };
  }

  function createSceneCarousel(selector, prevButton, nextButton) {
    function getScrollAmount() {
      var firstButton = selector ? selector.querySelector('.scene-selector__item') : null;
      var styles = selector ? window.getComputedStyle(selector) : null;
      var gap = styles ? parseFloat(styles.columnGap || styles.gap || '0') || 0 : 0;
      var itemWidth = firstButton ? firstButton.getBoundingClientRect().width : 0;
      var viewportStep = selector ? selector.clientWidth * 0.82 : 0;
      var itemStep = (itemWidth + gap) * (window.innerWidth <= 768 ? 2.25 : 3.4);
      return Math.max(viewportStep, itemStep);
    }

    function updateButtons() {
      var maxScrollLeft;
      if (!selector) {
        return;
      }
      maxScrollLeft = Math.max(selector.scrollWidth - selector.clientWidth, 0);
      if (prevButton) {
        prevButton.disabled = selector.scrollLeft <= 4;
      }
      if (nextButton) {
        nextButton.disabled = selector.scrollLeft >= maxScrollLeft - 4;
      }
    }

    function scrollByDirection(direction) {
      if (!selector) {
        return;
      }
      selector.scrollBy({ left: getScrollAmount() * direction, behavior: 'smooth' });
      window.setTimeout(updateButtons, 240);
    }

    if (prevButton) {
      prevButton.addEventListener('click', function() {
        scrollByDirection(-1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function() {
        scrollByDirection(1);
      });
    }

    if (selector) {
      selector.addEventListener('scroll', updateButtons, { passive: true });
    }
    window.addEventListener('resize', updateButtons);
    updateButtons();

    return {
      reveal: function(button, shouldAnimate) {
        if (button && typeof button.scrollIntoView === 'function') {
          button.scrollIntoView({
            behavior: shouldAnimate ? 'smooth' : 'auto',
            block: 'nearest',
            inline: 'center'
          });
        }
        window.setTimeout(updateButtons, shouldAnimate ? 240 : 0);
      },
      update: updateButtons
    };
  }

  function initN3DShowcase() {
    var root = document.querySelector('[data-n3d-showcase]');
    var data = window.N3D_SHOWCASE_DATA;
    var selector;
    var grid;
    var carouselRoot;
    var prevButton;
    var nextButton;
    var carousel;
    var datasetSwitch;
    var datasetOptions = [];
    var datasetSeen = {};
    var activeDataset = null;
    var currentSceneKey = null;
    var selectedSceneByDataset = {};
    var controllers = [];
    var buttons = [];
    var sceneLookup = {};
    var activationTimers = [];
    var rootVisible = !('IntersectionObserver' in window);
    var pageVisible = document.visibilityState !== 'hidden';

    if (!root || !data || !data.scenes || !data.scenes.length) {
      return;
    }

    function clearActivationTimers() {
      activationTimers.forEach(function(timerId) {
        window.clearTimeout(timerId);
      });
      activationTimers = [];
    }

    function shouldPlayMedia() {
      return rootVisible && pageVisible;
    }

    function queueControllerActivation() {
      clearActivationTimers();

      if (!shouldPlayMedia()) {
        controllers.forEach(function(entry) {
          entry.controller.setMediaActive(false);
        });
        return;
      }

      controllers.forEach(function(entry) {
        entry.controller.setMediaActive(false);
      });

      controllers.forEach(function(entry, index) {
        var activate = function() {
          entry.controller.setMediaActive(true);
        };

        if (index === 0) {
          activate();
          return;
        }

        activationTimers.push(window.setTimeout(activate, index * 160));
      });
    }

    selector = root.querySelector('[data-n3d-selector]');
    grid = root.querySelector('[data-n3d-grid]');
    carouselRoot = root.querySelector('[data-n3d-carousel]');
    prevButton = root.querySelector('[data-n3d-selector-prev]');
    nextButton = root.querySelector('[data-n3d-selector-next]');
    carousel = createSceneCarousel(selector, prevButton, nextButton);

    data.scenes.forEach(function(scene) {
      sceneLookup[scene.key] = scene;
      if (!selectedSceneByDataset[scene.datasetKey]) {
        selectedSceneByDataset[scene.datasetKey] = scene.key;
      }
      if (!datasetSeen[scene.datasetKey]) {
        datasetSeen[scene.datasetKey] = true;
        datasetOptions.push({
          key: scene.datasetKey,
          label: scene.datasetLabel || String(scene.datasetKey || '').toUpperCase()
        });
      }
    });

    if (data.defaultScene && sceneLookup[data.defaultScene]) {
      currentSceneKey = data.defaultScene;
      activeDataset = sceneLookup[data.defaultScene].datasetKey;
      selectedSceneByDataset[activeDataset] = data.defaultScene;
    } else {
      currentSceneKey = data.scenes[0].key;
      activeDataset = sceneLookup[currentSceneKey] ? sceneLookup[currentSceneKey].datasetKey : (datasetOptions[0] ? datasetOptions[0].key : null);
    }

    if (carouselRoot && datasetOptions.length > 1) {
      datasetSwitch = createDatasetSwitch(datasetOptions, activeDataset, function(datasetKey) {
        setDataset(datasetKey);
      });
      carouselRoot.parentNode.insertBefore(datasetSwitch.element, carouselRoot);
    }

    data.viewOrder.forEach(function(viewConfig) {
      var controller = createCompareCard(viewConfig, data.methodOrder || []);
      controllers.push({ key: viewConfig.key, controller: controller });
      grid.appendChild(controller.element);
    });

    function updateVisibleButtons(activeSceneKey) {
      var activeButton = null;

      buttons.forEach(function(entry) {
        var isVisible = entry.scene.datasetKey === activeDataset;
        var isActive = isVisible && entry.key === activeSceneKey;
        entry.button.hidden = !isVisible;
        entry.button.tabIndex = isVisible ? 0 : -1;
        entry.button.classList.toggle('is-active', isActive);
        entry.button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        if (isActive) {
          activeButton = entry.button;
        }
      });

      return activeButton;
    }

    function renderScene(sceneKey) {
      var scene = sceneLookup[sceneKey];
      if (!scene) {
        return;
      }

      clearActivationTimers();
      controllers.forEach(function(entry) {
        entry.controller.setMediaActive(false);
        entry.controller.setScene(scene, false);
      });

      if (shouldPlayMedia()) {
        queueControllerActivation();
      }
    }

    function activateScene(sceneKey, shouldScroll) {
      var scene = sceneLookup[sceneKey];
      var activeButton = null;
      if (!scene) {
        return;
      }

      currentSceneKey = sceneKey;
      activeDataset = scene.datasetKey || activeDataset;
      selectedSceneByDataset[activeDataset] = sceneKey;

      if (datasetSwitch) {
        datasetSwitch.update(activeDataset);
      }

      activeButton = updateVisibleButtons(currentSceneKey);

      if (carousel) {
        if (shouldScroll && activeButton) {
          carousel.reveal(activeButton, true);
        } else {
          carousel.update();
        }
      }

      renderScene(currentSceneKey);
    }

    function setDataset(datasetKey) {
      if (!datasetKey) {
        return;
      }

      activeDataset = datasetKey;

      if (datasetSwitch) {
        datasetSwitch.update(activeDataset);
      }

      if (selector) {
        selector.scrollTo({ left: 0, behavior: 'auto' });
      }

      updateVisibleButtons(currentSceneKey);

      if (carousel) {
        carousel.update();
      }
    }

    data.scenes.forEach(function(scene) {
      var isInitiallyVisible = scene.datasetKey === activeDataset;
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'scene-selector__item';
      button.hidden = !isInitiallyVisible;
      button.tabIndex = isInitiallyVisible ? 0 : -1;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('data-scene-key', scene.key);
      button.setAttribute('data-dataset-key', scene.datasetKey || '');
      button.innerHTML = [
        '<span class="scene-selector__preview" aria-hidden="true">',
        '  <img src="' + scene.thumb + '" alt="' + scene.label + ' thumbnail" loading="lazy" decoding="async">',
        '</span>',
        '<span class="n3d-scene-selector__label">' + scene.label + '</span>'
      ].join('');
      button.addEventListener('click', function() {
        activateScene(scene.key, true);
      });
      selector.appendChild(button);
      buttons.push({ key: scene.key, scene: scene, button: button });
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.target !== root) {
            return;
          }

          rootVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (shouldPlayMedia()) {
            queueControllerActivation();
          } else {
            clearActivationTimers();
            controllers.forEach(function(item) {
              item.controller.setMediaActive(false);
            });
          }
        });
      }, {
        rootMargin: '220px 0px',
        threshold: 0.01
      }).observe(root);
    }

    document.addEventListener('visibilitychange', function() {
      pageVisible = document.visibilityState !== 'hidden';
      if (shouldPlayMedia()) {
        queueControllerActivation();
      } else {
        clearActivationTimers();
        controllers.forEach(function(item) {
          item.controller.setMediaActive(false);
        });
      }
    });

    activateScene(currentSceneKey, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initN3DShowcase, { once: true });
  } else {
    initN3DShowcase();
  }
})();
