"use strict";

const BASELINES = [
  { key: "4DGaussians", label: "4DGaussians" },
  { key: "cem4dgs", label: "CEM-4DGS" },
  { key: "ex4dgs", label: "Ex4DGS" },
  { key: "spacetimegs", label: "STGS" },
  { key: "swift4d", label: "Swift4D" },
];

const METRIC_ROWS = [
  { key: "psnr", label: "PSNR", digits: 2 },
  { key: "ssim", label: "SSIM", digits: 3 },
  { key: "lpips", label: "LPIPS", digits: 3 },
  { key: "fps", label: "FPS", digits: 0 },
];

const VIEWS = [
  {
    key: "2",
    label: "2 Views",
    oursVideo: "./videos/2views/ours.mp4",
    oursImage: "./images/2views/ours.png",
    oursMetrics: { psnr: 27.833907727526316, ssim: 0.9004861378669738, lpips: 0.08882084312538306, fps: 181.701692 },
    baselineMetrics: {
      "4DGaussians": { psnr: 23.371225989728046, ssim: 0.8248419078191122, lpips: 0.16114824150999388, fps: 103.695674 },
      cem4dgs: { psnr: 22.900306701660156, ssim: 0.7949084043502808, lpips: 0.1917816400527954, fps: 100.002588 },
      ex4dgs: { psnr: 22.345916748046875, ssim: 0.7837618589401245, lpips: 0.20102907717227936, fps: 120.600204 },
      spacetimegs: { psnr: 21.63858264839381, ssim: 0.8062880575656891, lpips: 0.21266331603129704, fps: 102.845166 },
      swift4d: { psnr: 23.261410811578124, ssim: 0.8323418486118317, lpips: 0.14008553807934127, fps: 146.610563 },
    },
    baselineVideos: {
      "4DGaussians": "./videos/2views/4DGaussians.mp4",
      cem4dgs: "./videos/2views/cem4dgs.mp4",
      ex4dgs: "./videos/2views/ex4dgs.mp4",
      spacetimegs: "./videos/2views/stgs.mp4",
      swift4d: "./videos/2views/swift4d.mp4",
    },
    baselineImages: {
      "4DGaussians": "./images/2views/4DGaussians.png",
      cem4dgs: "./images/2views/cem4dgs.jpg",
      ex4dgs: "./images/2views/ex4dgs.jpg",
      spacetimegs: "./images/2views/stgs.jpg",
      swift4d: "./images/2views/swift4d.jpg",
    },
  },
  {
    key: "3",
    label: "3 Views",
    oursVideo: "./videos/3views/ours.mp4",
    oursImage: "./images/3views/ours.png",
    oursMetrics: { psnr: 30.0928614825359, ssim: 0.9273534590005874, lpips: 0.05449379425495863, fps: 198.777173 },
    baselineMetrics: {
      "4DGaussians": { psnr: 29.726309247572267, ssim: 0.9235472699006398, lpips: 0.05511420217653116, fps: 102.949017 },
      cem4dgs: { psnr: 26.59340476989746, ssim: 0.8877400755882263, lpips: 0.09130895882844925, fps: 100 },
      ex4dgs: { psnr: 26.381954193115234, ssim: 0.8865537643432617, lpips: 0.09156776964664459, fps: 117.264141 },
      spacetimegs: { psnr: 27.12563827126954, ssim: 0.894811202287674, lpips: 0.09486519873142242, fps: 103.38274 },
      swift4d: { psnr: 29.745576943149256, ssim: 0.9216883357365926, lpips: 0.05203293267637491, fps: 141.97189 },
    },
    baselineVideos: {
      "4DGaussians": "./videos/3views/4DGaussians.mp4",
      cem4dgs: "./videos/3views/cem4dgs.mp4",
      ex4dgs: "./videos/3views/ex4dgs.mp4",
      spacetimegs: "./videos/3views/stgs.mp4",
      swift4d: "./videos/3views/swift4d.mp4",
    },
    baselineImages: {
      "4DGaussians": "./images/3views/4DGaussians.png",
      cem4dgs: "./images/3views/cem4dgs.jpg",
      ex4dgs: "./images/3views/ex4dgs.jpg",
      spacetimegs: "./images/3views/stgs.jpg",
      swift4d: "./images/3views/swift4d.jpg",
    },
  },
  {
    key: "4",
    label: "4 Views",
    oursVideo: "./videos/4views/ours.mp4",
    oursImage: "./images/4views/ours.png",
    oursMetrics: { psnr: 30.145447495853162, ssim: 0.9229107944170634, lpips: 0.05955393694341183, fps: 152.573238 },
    baselineMetrics: {
      "4DGaussians": { psnr: 28.368130130967042, ssim: 0.8924264319737752, lpips: 0.07833154405156771, fps: 103.220923 },
      cem4dgs: { psnr: 26.262975692749023, ssim: 0.8619443774223328, lpips: 0.11256647855043411, fps: 100.133182 },
      ex4dgs: { psnr: 25.372793197631836, ssim: 0.8507135510444641, lpips: 0.12996502220630646, fps: 121.2796 },
      spacetimegs: { psnr: 25.86577632270489, ssim: 0.8619192765156428, lpips: 0.12853205762803555, fps: 103.399718 },
      swift4d: { psnr: 28.43763416121402, ssim: 0.8925828651587169, lpips: 0.0755992749830087, fps: 147.054712 },
    },
    baselineVideos: {
      "4DGaussians": "./videos/4views/4DGaussians.mp4",
      cem4dgs: "./videos/4views/cem4dgs.mp4",
      ex4dgs: "./videos/4views/ex4dgs.mp4",
      spacetimegs: "./videos/4views/stgs.mp4",
      swift4d: "./videos/4views/swift4d.mp4",
    },
    baselineImages: {
      "4DGaussians": "./images/4views/4DGaussians.png",
      cem4dgs: "./images/4views/cem4dgs.jpg",
      ex4dgs: "./images/4views/ex4dgs.jpg",
      spacetimegs: "./images/4views/stgs.jpg",
      swift4d: "./images/4views/swift4d.jpg",
    },
  },
];

const RESULTS = [
  { short: "N3D 2V", label: "N3D · 2 Views", src: "./results/n3d-2views.svg", caption: "N3D, 2 Views averages across 6 scenes for PSNR, SSIM, LPIPS, train time, and FPS." },
  { short: "N3D 3V", label: "N3D · 3 Views", src: "./results/n3d-3views.svg", caption: "N3D, 3 Views averages across 6 scenes for PSNR, SSIM, LPIPS, train time, and FPS." },
  { short: "N3D 4V", label: "N3D · 4 Views", src: "./results/n3d-4views.svg", caption: "N3D, 4 Views averages across 6 scenes for PSNR, SSIM, LPIPS, train time, and FPS." },
  { short: "Techni 2V", label: "Techni · 2 Views", src: "./results/techni-2views.svg", caption: "Techni, 2 Views averages across 5 scenes for PSNR, SSIM, LPIPS, train time, and FPS." },
  { short: "Techni 3V", label: "Techni · 3 Views", src: "./results/techni-3views.svg", caption: "Techni, 3 Views averages across 5 scenes for PSNR, SSIM, LPIPS, train time, and FPS." },
  { short: "Techni 4V", label: "Techni · 4 Views", src: "./results/techni-4views.svg", caption: "Techni, 4 Views averages across 5 scenes for PSNR, SSIM, LPIPS, train time, and FPS." },
];

function metricsMarkup(metrics) {
  return METRIC_ROWS.map((metric) => `
    <span class="video-metric">
      <b>${metrics[metric.key].toFixed(metric.digits)}</b>
      <i>${metric.label}</i>
    </span>`).join("");
}

function videoCardMarkup(view) {
  const baseline = BASELINES[1];
  return `
    <article class="compare-card" data-video-card>
      <div class="compare-card-header">
        <span>${view.label}</span>
        <div class="baseline-switcher" role="group" aria-label="${view.label} baseline selector">
          <button type="button" data-prev aria-label="Previous baseline for ${view.label}">‹</button>
          <strong>Ours <i>vs</i> <b data-baseline-name>${baseline.label}</b></strong>
          <button type="button" data-next aria-label="Next baseline for ${view.label}">›</button>
        </div>
      </div>
      <div class="compare-stage">
        <video class="compare-media" src="${view.baselineVideos[baseline.key]}" poster="./posters/cook-spinach.png" muted autoplay playsinline loop preload="auto" data-baseline-video aria-label="${view.label} ${baseline.label} baseline video"></video>
        <video class="compare-media compare-media-ours" src="${view.oursVideo}" poster="./posters/cook-spinach.png" muted autoplay playsinline loop preload="auto" data-ours-video aria-label="${view.label} SGS-4DGS video"></video>
        <div class="video-metrics video-metrics-left" aria-label="${view.label} SGS-4DGS metrics">${metricsMarkup(view.oursMetrics)}</div>
        <div class="video-metrics video-metrics-right" data-baseline-metrics aria-label="${view.label} ${baseline.label} metrics">${metricsMarkup(view.baselineMetrics[baseline.key])}</div>
        <span class="media-badge badge-left">SGS-4DGS</span>
        <span class="media-badge badge-right" data-baseline-badge>${baseline.label}</span>
        <div class="compare-divider" style="left: 50%" aria-hidden="true"><span>↔</span></div>
        <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Move ${view.label} comparison divider">
      </div>
    </article>`;
}

function imageCardMarkup(view) {
  const baseline = BASELINES[0];
  return `
    <article class="visual-card" data-image-card>
      <div class="compare-card-header">
        <span>${view.label}</span>
        <div class="baseline-switcher" role="group" aria-label="${view.label} image baseline selector">
          <button type="button" data-prev aria-label="Previous image baseline for ${view.label}">‹</button>
          <strong>Ours <i>vs</i> <b data-baseline-name>${baseline.label}</b></strong>
          <button type="button" data-next aria-label="Next image baseline for ${view.label}">›</button>
        </div>
      </div>
      <div class="visual-stage">
        <img class="visual-image" src="${view.baselineImages[baseline.key]}" alt="${view.label} ${baseline.label} visual result" loading="lazy" data-baseline-image>
        <img class="visual-image visual-image-ours" src="${view.oursImage}" alt="${view.label} SGS-4DGS visual result" loading="lazy" data-ours-image>
        <span class="media-badge badge-left">SGS-4DGS</span>
        <span class="media-badge badge-right" data-baseline-badge>${baseline.label}</span>
        <div class="compare-divider" style="left: 50%" aria-hidden="true"><span>↔</span></div>
        <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Move ${view.label} image comparison divider">
      </div>
    </article>`;
}

function setupDivider(card) {
  const range = card.querySelector(".compare-range");
  const ours = card.querySelector(".compare-media-ours, .visual-image-ours");
  const divider = card.querySelector(".compare-divider");
  const update = () => {
    const position = Number(range.value);
    ours.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
    divider.style.left = `${position}%`;
  };
  range.addEventListener("input", update);
  update();
}

function setupVideoCard(card, view) {
  let baselineIndex = 1;
  let lastSync = 0;
  const ours = card.querySelector("[data-ours-video]");
  const baselineVideo = card.querySelector("[data-baseline-video]");
  const baselineName = card.querySelector("[data-baseline-name]");
  const baselineBadge = card.querySelector("[data-baseline-badge]");
  const baselineMetrics = card.querySelector("[data-baseline-metrics]");

  ours.muted = true;
  baselineVideo.muted = true;

  const playPair = () => Promise.allSettled([ours.play(), baselineVideo.play()]);
  const pausePair = () => {
    ours.pause();
    baselineVideo.pause();
  };

  const changeBaseline = (direction) => {
    pausePair();
    ours.currentTime = 0;
    baselineIndex = (baselineIndex + direction + BASELINES.length) % BASELINES.length;
    const baseline = BASELINES[baselineIndex];
    baselineName.textContent = baseline.label;
    baselineBadge.textContent = baseline.label;
    baselineMetrics.innerHTML = metricsMarkup(view.baselineMetrics[baseline.key]);
    baselineMetrics.setAttribute("aria-label", `${view.label} ${baseline.label} metrics`);
    baselineVideo.setAttribute("aria-label", `${view.label} ${baseline.label} baseline video`);
    baselineVideo.src = view.baselineVideos[baseline.key];
    baselineVideo.load();
    lastSync = 0;
  };

  ours.addEventListener("loadeddata", playPair);
  baselineVideo.addEventListener("loadeddata", playPair);
  ours.addEventListener("timeupdate", () => {
    const now = performance.now();
    if (baselineVideo.readyState < 3 || now - lastSync < 1000) return;
    lastSync = now;
    if (Math.abs(ours.currentTime - baselineVideo.currentTime) > 0.75) {
      baselineVideo.currentTime = ours.currentTime;
    }
  });
  card.querySelector("[data-prev]").addEventListener("click", () => changeBaseline(-1));
  card.querySelector("[data-next]").addEventListener("click", () => changeBaseline(1));
  setupDivider(card);
  void playPair();

  return { play: playPair, pause: pausePair };
}

function setupImageCard(card, view) {
  let baselineIndex = 0;
  const baselineImage = card.querySelector("[data-baseline-image]");
  const baselineName = card.querySelector("[data-baseline-name]");
  const baselineBadge = card.querySelector("[data-baseline-badge]");

  const changeBaseline = (direction) => {
    baselineIndex = (baselineIndex + direction + BASELINES.length) % BASELINES.length;
    const baseline = BASELINES[baselineIndex];
    baselineName.textContent = baseline.label;
    baselineBadge.textContent = baseline.label;
    baselineImage.src = view.baselineImages[baseline.key];
    baselineImage.alt = `${view.label} ${baseline.label} visual result`;
  };

  card.querySelector("[data-prev]").addEventListener("click", () => changeBaseline(-1));
  card.querySelector("[data-next]").addEventListener("click", () => changeBaseline(1));
  setupDivider(card);
}

function renderResults() {
  const gallery = document.querySelector("#results-gallery");
  gallery.innerHTML = `
    <div class="results-selector" role="tablist" aria-label="Result summaries">
      ${RESULTS.map((result, index) => `<button type="button" role="tab" aria-selected="${index === 0}" class="${index === 0 ? "is-active" : ""}" data-result-index="${index}">${result.short}</button>`).join("")}
    </div>
    <figure class="results-display">
      <img src="${RESULTS[0].src}" alt="${RESULTS[0].label} quantitative result charts" data-result-image>
      <figcaption data-result-caption>${RESULTS[0].caption}</figcaption>
    </figure>`;

  const image = gallery.querySelector("[data-result-image]");
  const caption = gallery.querySelector("[data-result-caption]");
  const buttons = [...gallery.querySelectorAll("[data-result-index]")];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.resultIndex);
      const result = RESULTS[index];
      image.src = result.src;
      image.alt = `${result.label} quantitative result charts`;
      caption.textContent = result.caption;
      buttons.forEach((item, itemIndex) => {
        const active = itemIndex === index;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
    });
  });
}

const videoGrid = document.querySelector("#video-comparisons");
const imageGrid = document.querySelector("#image-comparisons");
videoGrid.innerHTML = VIEWS.map(videoCardMarkup).join("");
imageGrid.innerHTML = VIEWS.map(imageCardMarkup).join("");

const videoControllers = [...videoGrid.querySelectorAll("[data-video-card]")].map((card, index) => setupVideoCard(card, VIEWS[index]));
[...imageGrid.querySelectorAll("[data-image-card]")].forEach((card, index) => setupImageCard(card, VIEWS[index]));
renderResults();

document.addEventListener("visibilitychange", () => {
  videoControllers.forEach((controller) => {
    if (document.hidden) controller.pause();
    else void controller.play();
  });
});
