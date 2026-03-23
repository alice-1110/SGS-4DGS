from __future__ import annotations

from pathlib import Path
import filecmp
import html
import json
import re
import shutil
from typing import Dict, List, Tuple

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from matplotlib.ticker import FuncFormatter

REPO = Path(__file__).resolve().parents[1]
SOURCE_ROOT = Path('/home/xuepengcheng/60127A1/gado-gs.github.io/n3d')
DEST_N3D = REPO / 'n3d'
INDEX_HTML = REPO / 'index.html'
INDEX_CSS = REPO / 'static' / 'css' / 'index.css'
DATA_JS = REPO / 'static' / 'js' / 'n3d-showcase-data.js'
RESULTS_DIR = REPO / 'static' / 'images' / 'results'

VIEWS: List[Tuple[str, str]] = [
    ('2views', '2 Views'),
    ('3views', '3 Views'),
    ('4views', '4 Views'),
]
METHODS: List[Tuple[str, str]] = [
    ('ours', 'SGS-4DGS'),
    ('4DGaussians', '4DGaussians'),
    ('cem4dgs', 'CEM-4DGS'),
    ('ex4dgs', 'Ex4DGS'),
    ('spacetimegs', 'STGS'),
    ('swift4d', 'Swift4D'),
]
METHOD_SHORT = {
    'ours': 'SGS-4DGS',
    '4DGaussians': '4DGauss',
    'cem4dgs': 'CEM-4DGS',
    'ex4dgs': 'Ex4DGS',
    'spacetimegs': 'STGS',
    'swift4d': 'Swift4D',
}
METHOD_COLORS = {
    'ours': '#173c68',
    '4DGaussians': '#f28b30',
    'cem4dgs': '#28a39d',
    'ex4dgs': '#d45555',
    'spacetimegs': '#7b63c9',
    'swift4d': '#4e8f2f',
}
DEFAULT_METHOD_ROTATION = ['4DGaussians', 'cem4dgs', 'ex4dgs', 'spacetimegs', 'swift4d', '4DGaussians']
RESULTS_METRICS = [
    {
        'key': 'psnr',
        'title': 'PSNR ↑',
        'higher_better': True,
        'transform': lambda value: value,
        'note': 'Higher is better',
        'log_scale': False,
    },
    {
        'key': 'ssim',
        'title': 'SSIM ↑',
        'higher_better': True,
        'transform': lambda value: value,
        'note': 'Higher is better',
        'log_scale': False,
    },
    {
        'key': 'lpips',
        'title': 'LPIPS ↓',
        'higher_better': False,
        'transform': lambda value: value,
        'note': 'Lower is better',
        'log_scale': False,
    },
    {
        'key': 'train_time',
        'title': 'Train Time (min) ↓',
        'higher_better': False,
        'transform': lambda value: value / 60.0,
        'note': 'Lower is better',
        'log_scale': False,
    },
    {
        'key': 'fps',
        'title': 'FPS ↑',
        'higher_better': True,
        'transform': lambda value: value,
        'note': 'Higher is better · log axis',
        'log_scale': True,
    },
]
RESULTS_CSS = '''
/* Results Charts */
.results-summary-note {
  margin: 0.9rem 0 0;
  color: #67748b;
  font-size: 0.95rem;
  line-height: 1.55;
}

.results-selector__item img {
  object-fit: contain;
  aspect-ratio: 1.62 / 1;
  background: #f4f7fb;
}

.results-display__image {
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 1rem;
  background: #f4f7fb;
}

.results-display__caption {
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 768px) {
  .results-selector__item img {
    aspect-ratio: 1.44 / 1;
  }

  .results-display__caption {
    max-width: 100%;
  }
}
/* End Results Charts */
'''


def scene_label(scene_key: str) -> str:
    return ' '.join(part.capitalize() for part in scene_key.split('_'))


def extract_iteration(path: Path) -> int:
    match = re.search(r'(?:ours|itrs)_(\d+)', str(path))
    return int(match.group(1)) if match else -1


def choose_video(scene_dir: Path) -> Path:
    candidates = sorted(scene_dir.rglob('*.mp4'))
    if not candidates:
        raise FileNotFoundError(f'No video found under {scene_dir}')
    if len(candidates) == 1:
        return candidates[0]
    return max(candidates, key=lambda path: (extract_iteration(path), path.stat().st_mtime_ns, str(path)))


def sync_file(src: Path, dst: Path) -> bool:
    dst.parent.mkdir(parents=True, exist_ok=True)
    if dst.exists() and filecmp.cmp(src, dst, shallow=False):
        return False
    shutil.copy2(src, dst)
    return True


def load_metrics(path: Path) -> Dict[str, float]:
    raw = json.loads(path.read_text())
    return {key: float(value) for key, value in raw.items()}


def build_showcase_data() -> Dict[str, object]:
    scenes = sorted(scene_dir.name for scene_dir in (SOURCE_ROOT / '2views' / 'ours').iterdir() if scene_dir.is_dir())
    data = {
        'defaultScene': scenes[0],
        'viewOrder': [{'key': key, 'label': label} for key, label in VIEWS],
        'methodOrder': [{'key': key, 'label': label} for key, label in METHODS if key != 'ours'],
        'scenes': [],
    }

    for scene_index, scene_key in enumerate(scenes):
        thumb_src = SOURCE_ROOT / '2views' / 'ours' / scene_key / '00000.png'
        thumb_dst = DEST_N3D / 'thumbs' / f'{scene_key}.png'
        sync_file(thumb_src, thumb_dst)
        default_method = DEFAULT_METHOD_ROTATION[scene_index % len(DEFAULT_METHOD_ROTATION)]
        scene_entry = {
            'key': scene_key,
            'label': scene_label(scene_key),
            'thumb': f'./n3d/thumbs/{scene_key}.png',
            'defaultMethod': default_method,
            'views': {},
        }

        for view_key, view_label in VIEWS:
            poster_path = f'./n3d/thumbs/{scene_key}.png'
            ours_metrics = load_metrics(SOURCE_ROOT / view_key / 'ours' / scene_key / 'result.json')
            ours_video_src = choose_video(SOURCE_ROOT / view_key / 'ours' / scene_key)
            ours_video_dst = DEST_N3D / 'videos' / scene_key / view_key / 'ours.mp4'
            sync_file(ours_video_src, ours_video_dst)
            view_entry = {
                'label': view_label,
                'poster': poster_path,
                'ours': {
                    'label': 'Ours',
                    'video': f'./n3d/videos/{scene_key}/{view_key}/ours.mp4',
                    'metrics': ours_metrics,
                },
                'baselines': {},
            }

            for method_key, method_label in METHODS:
                if method_key == 'ours':
                    continue
                metrics = load_metrics(SOURCE_ROOT / view_key / method_key / scene_key / 'result.json')
                video_src = choose_video(SOURCE_ROOT / view_key / method_key / scene_key)
                video_dst = DEST_N3D / 'videos' / scene_key / view_key / f'{method_key}.mp4'
                sync_file(video_src, video_dst)
                view_entry['baselines'][method_key] = {
                    'key': method_key,
                    'label': method_label,
                    'video': f'./n3d/videos/{scene_key}/{view_key}/{method_key}.mp4',
                    'metrics': metrics,
                }

            scene_entry['views'][view_key] = view_entry

        data['scenes'].append(scene_entry)

    DATA_JS.write_text('window.N3D_SHOWCASE_DATA = ' + json.dumps(data, indent=2) + ';\n')
    return data


def compute_averages(data: Dict[str, object]) -> Dict[str, Dict[str, Dict[str, float]]]:
    metric_keys = [metric['key'] for metric in RESULTS_METRICS]
    aggregates: Dict[str, Dict[str, Dict[str, List[float]]]] = {
        view_key: {method_key: {metric_key: [] for metric_key in metric_keys} for method_key, _ in METHODS}
        for view_key, _ in VIEWS
    }

    for scene in data['scenes']:
        for view_key, _ in VIEWS:
            view_entry = scene['views'][view_key]
            for metric_key in metric_keys:
                aggregates[view_key]['ours'][metric_key].append(view_entry['ours']['metrics'][metric_key])
                for method_key, _ in METHODS:
                    if method_key == 'ours':
                        continue
                    aggregates[view_key][method_key][metric_key].append(view_entry['baselines'][method_key]['metrics'][metric_key])

    return {
        view_key: {
            method_key: {
                metric_key: sum(values) / len(values)
                for metric_key, values in metric_map.items()
            }
            for method_key, metric_map in method_map.items()
        }
        for view_key, method_map in aggregates.items()
    }


def best_methods_for_metric(view_stats: Dict[str, Dict[str, float]], metric_key: str, higher_better: bool) -> List[str]:
    values = [(method_key, metrics[metric_key]) for method_key, metrics in view_stats.items()]
    best_value = max(value for _, value in values) if higher_better else min(value for _, value in values)
    return [method_key for method_key, value in values if abs(value - best_value) <= 1e-9]


def metric_axis_formatter(metric_key: str) -> FuncFormatter:
    if metric_key == 'psnr':
        return FuncFormatter(lambda value, pos: f'{value:.0f}')
    if metric_key == 'ssim':
        return FuncFormatter(lambda value, pos: f'{value:.2f}')
    if metric_key == 'lpips':
        return FuncFormatter(lambda value, pos: f'{value:.2f}')
    if metric_key == 'train_time':
        return FuncFormatter(lambda value, pos: f'{value:.0f}')
    return FuncFormatter(lambda value, pos: f'{value:g}')


def generate_results_charts(data: Dict[str, object]) -> None:
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    averages = compute_averages(data)

    for view_key, view_label in VIEWS:
        fig, axes = plt.subplots(2, 3, figsize=(14.2, 8.3), dpi=160)
        fig.patch.set_facecolor('#f4f7fb')
        flat_axes = axes.flatten()
        metric_axes = flat_axes[:5]
        legend_ax = flat_axes[5]
        legend_ax.axis('off')
        legend_ax.set_facecolor('#ffffff')
        view_stats = averages[view_key]
        method_keys = [method_key for method_key, _ in METHODS]
        x_positions = list(range(len(method_keys)))

        for axis, metric in zip(metric_axes, RESULTS_METRICS):
            axis.set_facecolor('#ffffff')
            axis.grid(True, axis='y', color='#d9e2ef', linewidth=0.85, alpha=0.9)
            axis.grid(False, axis='x')
            axis.set_axisbelow(True)

            values = [metric['transform'](view_stats[method_key][metric['key']]) for method_key in method_keys]
            best_methods = set(best_methods_for_metric(view_stats, metric['key'], metric['higher_better']))
            bars = axis.bar(
                x_positions,
                values,
                width=0.68,
                color=[METHOD_COLORS[method_key] for method_key in method_keys],
                edgecolor='none',
                alpha=0.96,
                zorder=3,
            )

            for bar, method_key in zip(bars, method_keys):
                if method_key in best_methods:
                    bar.set_edgecolor('#d4a017')
                    bar.set_linewidth(2.6)
                elif method_key == 'ours':
                    bar.set_edgecolor('#0b1e33')
                    bar.set_linewidth(1.4)
                else:
                    bar.set_edgecolor((0, 0, 0, 0.08))
                    bar.set_linewidth(0.8)

            if metric['log_scale']:
                axis.set_yscale('log')
                axis.minorticks_off()

            axis.set_title(metric['title'], loc='left', fontsize=12.2, fontweight='bold', color='#173c68', pad=10)
            axis.text(
                0.0,
                1.01,
                metric['note'],
                transform=axis.transAxes,
                ha='left',
                va='bottom',
                fontsize=8.9,
                color='#64748b',
            )
            axis.set_xticks(x_positions, [METHOD_SHORT[method_key] for method_key in method_keys], rotation=25, ha='right')
            axis.tick_params(axis='x', labelsize=9, colors='#334155')
            axis.tick_params(axis='y', labelsize=9, colors='#475569')
            axis.yaxis.set_major_formatter(metric_axis_formatter(metric['key']))
            axis.margins(x=0.05)

            for spine in ['top', 'right']:
                axis.spines[spine].set_visible(False)
            axis.spines['left'].set_color('#c7d3e3')
            axis.spines['bottom'].set_color('#c7d3e3')

        legend_ax.text(0.0, 0.97, 'Methods', fontsize=12.0, fontweight='bold', color='#173c68', va='top')
        for index, (method_key, method_label) in enumerate(METHODS):
            y = 0.85 - index * 0.11
            legend_ax.add_patch(Rectangle((0.0, y - 0.03), 0.06, 0.05, transform=legend_ax.transAxes, facecolor=METHOD_COLORS[method_key], edgecolor='none'))
            legend_ax.text(0.09, y, method_label, transform=legend_ax.transAxes, fontsize=10.2, color='#334155', va='center')
        legend_ax.text(
            0.0,
            0.12,
            'Average over 6 N3D scenes. Gold outlines mark the best method in each metric panel. FPS uses a log axis for readability.',
            transform=legend_ax.transAxes,
            fontsize=9.4,
            color='#64748b',
            va='top',
            wrap=True,
        )

        fig.suptitle(f'{view_label} Sparse-View N3D Averages', x=0.05, y=0.985, ha='left', fontsize=18, fontweight='bold', color='#173c68')
        fig.text(0.05, 0.953, 'Generated directly from the current result.json logs for SGS-4DGS and five dynamic Gaussian splatting baselines.', fontsize=10.2, color='#5b6b84')
        fig.tight_layout(rect=(0, 0, 1, 0.935))
        fig.savefig(RESULTS_DIR / f'results-{view_key}-bars.svg', format='svg', bbox_inches='tight')
        plt.close(fig)


def render_results_charts(_: Dict[str, object]) -> str:
    items = []
    for view_key, view_label in VIEWS:
        caption = f'{view_label} averages across 6 N3D scenes for PSNR, SSIM, LPIPS, train time, and FPS. Gold outlines mark the best method in each metric panel.'
        items.append(
            f'''
                  <button class="results-selector__item" type="button" data-results-item
                    data-full-src="./static/images/results/results-{view_key}-bars.svg"
                    data-caption="{html.escape(caption)}">
                    <img src="./static/images/results/results-{view_key}-bars.svg" alt="{html.escape(view_label)} results chart thumbnail."
                      loading="lazy" decoding="async">
                    <span class="is-sr-only">{html.escape(view_label)} Results</span>
                  </button>
            '''.rstrip()
        )

    first_view_key, first_view_label = VIEWS[0]
    first_caption = f'{first_view_label} averages across 6 N3D scenes for PSNR, SSIM, LPIPS, train time, and FPS. Gold outlines mark the best method in each metric panel.'

    return f'''
  <section class="section">
    <div class="container is-max-desktop">
      <div class="columns is-centered has-text-centered">
        <div class="column results-panel" data-results-gallery>
          <h2 class="title is-3 results-title">Results</h2>
          <div class="results-divider" aria-hidden="true"></div>
          <div class="content has-text-justified results-summary">
            <p>
              We report the latest sparse-view N3D metrics averaged across six scenes. Use the horizontal selector below to switch
              between the 2-view, 3-view, and 4-view summaries, shown as bar-chart panels for PSNR, SSIM, LPIPS, training time, and FPS.
            </p>
            <p class="results-summary-note">
              The results are generated directly from the current <code>result.json</code> logs. Gold outlines mark the best method in each metric panel.
            </p>
          </div>

          <div class="results-selector-shell">
            <button class="results-selector__arrow" type="button" data-results-prev aria-label="Show previous results">
              <span aria-hidden="true">&#10094;</span>
            </button>
            <div class="results-selector">
              <div class="results-selector__viewport">
                <div class="results-selector__track">
{''.join(items)}
                </div>
              </div>
            </div>
            <button class="results-selector__arrow" type="button" data-results-next aria-label="Show next results">
              <span aria-hidden="true">&#10095;</span>
            </button>
          </div>

          <div class="results-display" data-results-display>
            <div class="results-display__viewport">
              <div class="results-display__stage is-current" data-results-display-stage>
                <img class="results-display__image" data-results-display-image
                  src="./static/images/results/results-{first_view_key}-bars.svg"
                  alt="{html.escape(first_view_label)} bar charts comparing PSNR, SSIM, LPIPS, train time, and FPS across methods." loading="lazy" decoding="async">
                <p class="results-display__caption" data-results-display-caption>
                  {html.escape(first_caption)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>'''.strip('\n')


def update_index_html(results_section: str) -> None:
    text = INDEX_HTML.read_text()
    text = re.sub(
        r'(<p class="n3d-showcase-summary">)(.*?)(</p>)',
        r'\1\n              Select a scene to update all three sparse-view video comparisons. Each card keeps the Ours and baseline videos synchronized, lets you switch the baseline with the arrow controls, and overlays the latest per-scene metrics from the current N3D outputs.\n            \3',
        text,
        count=1,
        flags=re.S,
    )
    pattern = re.compile(
        r'  <section class="section">\n    <div class="container is-max-desktop">\n      <div class="columns is-centered has-text-centered">\n        <div class="column results-panel.*?</section>\n\n(?=  <section class="section" data-visual-comparisons>)',
        flags=re.S,
    )
    if not pattern.search(text):
        raise RuntimeError('Could not locate Results section in index.html')
    text = pattern.sub(results_section + '\n\n', text, count=1)
    INDEX_HTML.write_text(text)


def update_index_css() -> None:
    text = INDEX_CSS.read_text()
    pattern = re.compile(r'/\* Results (?:Tables|Charts) \*/.*?/\* End Results (?:Tables|Charts) \*/', flags=re.S)
    if pattern.search(text):
        text = pattern.sub(RESULTS_CSS.strip(), text, count=1)
    else:
        text = text.rstrip() + '\n\n' + RESULTS_CSS.strip() + '\n'
    INDEX_CSS.write_text(text)


def main() -> None:
    data = build_showcase_data()
    generate_results_charts(data)
    results_section = render_results_charts(data)
    update_index_html(results_section)
    update_index_css()


if __name__ == '__main__':
    main()
