from __future__ import annotations

from pathlib import Path
import filecmp
import html
import json
import re
import shutil
from typing import Dict, List, Tuple

from PIL import Image

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from matplotlib.ticker import FuncFormatter

REPO = Path(__file__).resolve().parents[1]
SOURCE_DATASETS: List[Tuple[str, Path]] = [
    ('n3d', Path('/home/xuepengcheng/60127A1/gado-gs.github.io/n3d')),
    ('techni', Path('/home/xuepengcheng/60127A1/gado-gs.github.io/techni')),
]
DEST_ASSETS = REPO / 'n3d'
INDEX_HTML = REPO / 'index.html'
INDEX_CSS = REPO / 'static' / 'css' / 'index.css'
DATA_JS = REPO / 'static' / 'js' / 'n3d-showcase-data.js'
VISUAL_DATA_JS = REPO / 'static' / 'js' / 'visual-comparisons-data.js'
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
NUMERIC_METRIC_KEYS = {'psnr', 'ssim', 'lpips', 'train_time', 'eval_time', 'fps', 'model_size'}
RESULTS_METRICS = [
    {
        'key': 'psnr',
        'title': 'PSNR ↑',
        'higher_better': True,
        'transform': lambda value: value,
        'log_scale': False,
    },
    {
        'key': 'ssim',
        'title': 'SSIM ↑',
        'higher_better': True,
        'transform': lambda value: value,
        'log_scale': False,
    },
    {
        'key': 'lpips',
        'title': 'LPIPS ↓',
        'higher_better': False,
        'transform': lambda value: value,
        'log_scale': False,
    },
    {
        'key': 'train_time',
        'title': 'Train Time (min) ↓',
        'higher_better': False,
        'transform': lambda value: value / 60.0,
        'log_scale': False,
    },
    {
        'key': 'fps',
        'title': 'FPS ↑',
        'higher_better': True,
        'transform': lambda value: value,
        'log_scale': True,
    },
]
RESULTS_CSS = '''
/* Results Charts */
.results-summary-note {
  margin: 0.9rem 0 0;
  color: #5f6f86;
  font-size: 0.95rem;
  line-height: 1.55;
}

.results-selector__item {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 252, 0.98));
}

.results-selector__item img {
  object-fit: contain;
  aspect-ratio: 1.62 / 1;
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.92), rgba(236, 242, 248, 0.96));
  padding: 0.32rem;
}

.results-display {
  margin-top: 0.15rem;
}

.results-display__image {
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 1.1rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(238, 244, 249, 0.98));
  padding: 0.3rem;
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);
}

.results-display__caption {
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  color: #607087;
  font-size: 0.98rem;
}

@media screen and (max-width: 768px) {
  .results-selector__item img {
    aspect-ratio: 1.44 / 1;
    padding: 0.22rem;
  }

  .results-display__image {
    padding: 0.18rem;
    border-radius: 0.9rem;
  }

  .results-display__caption {
    max-width: 100%;
  }
}
/* End Results Charts */
'''


def scene_label(scene_name: str) -> str:
    return ' '.join(part.capitalize() for part in scene_name.split('_'))


def scene_slug(scene_name: str) -> str:
    slug = re.sub(r'[^a-z0-9]+', '-', scene_name.lower()).strip('-')
    return slug or 'scene'


def scene_id(dataset_key: str, scene_name: str) -> str:
    if dataset_key == 'n3d':
        return scene_name
    return f'{dataset_key}-{scene_slug(scene_name)}'


def collect_scene_sources() -> List[Dict[str, object]]:
    scenes: List[Dict[str, object]] = []
    for dataset_key, source_root in SOURCE_DATASETS:
        source_dir = source_root / '2views' / 'ours'
        dataset_scenes = []
        for scene_dir in sorted(source_dir.iterdir(), key=lambda path: path.name.lower()):
            if not scene_dir.is_dir() or scene_dir.name.startswith('.'):
                continue
            dataset_scenes.append({
                'key': scene_id(dataset_key, scene_dir.name),
                'label': scene_label(scene_dir.name),
                'source_name': scene_dir.name,
                'dataset_key': dataset_key,
                'source_root': source_root,
            })
        scenes.extend(dataset_scenes)
    return scenes


def extract_iteration(path: Path) -> int:
    match = re.search(r'(?:ours|itrs)_(\d+)', str(path))
    return int(match.group(1)) if match else -1


def choose_video(scene_dir: Path) -> Path:
    candidates = [path for path in sorted(scene_dir.rglob('*.mp4')) if not path.name.startswith('._')]
    if not candidates:
        raise FileNotFoundError(f'No video found under {scene_dir}')
    if len(candidates) == 1:
        return candidates[0]
    return max(candidates, key=lambda path: (extract_iteration(path), path.stat().st_mtime_ns, str(path)))


def choose_preview(scene_dir: Path) -> Path:
    direct_preview = scene_dir / 'preview.png'
    if direct_preview.exists() and not direct_preview.name.startswith('._'):
        return direct_preview

    fallback = scene_dir / '00000.png'
    if fallback.exists() and not fallback.name.startswith('._'):
        return fallback

    candidates = [path for path in sorted(scene_dir.glob('*.png')) if not path.name.startswith('._')]
    if candidates:
        return candidates[0]

    raise FileNotFoundError(f'No preview image found under {scene_dir}')


def sync_file(src: Path, dst: Path) -> bool:
    dst.parent.mkdir(parents=True, exist_ok=True)
    if dst.exists() and filecmp.cmp(src, dst, shallow=False):
        return False
    shutil.copy2(src, dst)
    return True


def scene_image_extension(dataset_key: str) -> str:
    return '.jpg' if dataset_key == 'techni' else '.png'


def sync_image(src: Path, dst: Path) -> bool:
    if dst.suffix.lower() not in {'.jpg', '.jpeg'}:
        return sync_file(src, dst)

    dst.parent.mkdir(parents=True, exist_ok=True)
    temp_path = dst.with_name(dst.name + '.tmp')
    with Image.open(src) as image:
        if image.mode in ('RGBA', 'LA') or (image.mode == 'P' and 'transparency' in image.info):
            rgba_image = image.convert('RGBA')
            rgb_image = Image.new('RGB', rgba_image.size, (255, 255, 255))
            rgb_image.paste(rgba_image, mask=rgba_image.split()[-1])
        else:
            rgb_image = image.convert('RGB')
        rgb_image.save(temp_path, format='JPEG', quality=88, optimize=True)

    if dst.exists() and filecmp.cmp(temp_path, dst, shallow=False):
        temp_path.unlink()
        return False

    temp_path.replace(dst)
    return True


def load_metrics(path: Path) -> Dict[str, float]:
    raw = json.loads(path.read_text())
    metrics = {}
    for key, value in raw.items():
        if key in NUMERIC_METRIC_KEYS and isinstance(value, (int, float)):
            metrics[key] = float(value)
    return metrics


def build_showcase_data() -> Dict[str, object]:
    scene_sources = collect_scene_sources()
    data = {
        'defaultScene': scene_sources[0]['key'],
        'viewOrder': [{'key': key, 'label': label} for key, label in VIEWS],
        'methodOrder': [{'key': key, 'label': label} for key, label in METHODS if key != 'ours'],
        'scenes': [],
    }

    for scene_index, scene_info in enumerate(scene_sources):
        scene_key = scene_info['key']
        source_name = scene_info['source_name']
        source_root = scene_info['source_root']
        dataset_key = scene_info['dataset_key']
        thumb_ext = scene_image_extension(dataset_key)
        thumb_scene_dir = source_root / '2views' / 'ours' / source_name
        thumb_src = thumb_scene_dir / '00000.png' if (thumb_scene_dir / '00000.png').exists() else choose_preview(thumb_scene_dir)
        thumb_dst = DEST_ASSETS / 'thumbs' / f'{scene_key}{thumb_ext}'
        sync_image(thumb_src, thumb_dst)
        default_method = DEFAULT_METHOD_ROTATION[scene_index % len(DEFAULT_METHOD_ROTATION)]
        scene_entry = {
            'key': scene_key,
            'label': scene_info['label'],
            'thumb': f'./n3d/thumbs/{scene_key}{thumb_ext}',
            'defaultMethod': default_method,
            'views': {},
        }

        for view_key, view_label in VIEWS:
            poster_path = f'./n3d/thumbs/{scene_key}{thumb_ext}'
            ours_metrics = load_metrics(source_root / view_key / 'ours' / source_name / 'result.json')
            ours_video_src = choose_video(source_root / view_key / 'ours' / source_name)
            ours_video_dst = DEST_ASSETS / 'videos' / scene_key / view_key / 'ours.mp4'
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
                metrics = load_metrics(source_root / view_key / method_key / source_name / 'result.json')
                video_src = choose_video(source_root / view_key / method_key / source_name)
                video_dst = DEST_ASSETS / 'videos' / scene_key / view_key / f'{method_key}.mp4'
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


def build_visual_comparison_data(showcase_data: Dict[str, object]) -> Dict[str, object]:
    scene_sources = {scene['key']: scene for scene in collect_scene_sources()}
    data = {
        'defaultScene': showcase_data['defaultScene'],
        'viewOrder': showcase_data['viewOrder'],
        'methodOrder': showcase_data['methodOrder'],
        'scenes': [],
    }

    for scene in showcase_data['scenes']:
        scene_key = scene['key']
        scene_source = scene_sources[scene_key]
        source_name = scene_source['source_name']
        source_root = scene_source['source_root']
        dataset_key = scene_source['dataset_key']
        preview_ext = scene_image_extension(dataset_key)
        scene_entry = {
            'key': scene_key,
            'label': scene['label'],
            'thumb': scene['thumb'],
            'defaultMethod': scene.get('defaultMethod', DEFAULT_METHOD_ROTATION[0]),
            'views': {},
        }

        for view_key, view_label in VIEWS:
            ours_src = choose_preview(source_root / view_key / 'ours' / source_name)
            ours_dst = DEST_ASSETS / 'previews' / scene_key / view_key / f'ours{preview_ext}'
            sync_image(ours_src, ours_dst)
            view_entry = {
                'label': view_label,
                'ours': {
                    'label': 'Ours',
                    'image': f'./n3d/previews/{scene_key}/{view_key}/ours{preview_ext}',
                },
                'baselines': {},
            }

            for method_key, method_label in METHODS:
                if method_key == 'ours':
                    continue
                preview_src = choose_preview(source_root / view_key / method_key / source_name)
                preview_dst = DEST_ASSETS / 'previews' / scene_key / view_key / f'{method_key}{preview_ext}'
                sync_image(preview_src, preview_dst)
                view_entry['baselines'][method_key] = {
                    'key': method_key,
                    'label': method_label,
                    'image': f'./n3d/previews/{scene_key}/{view_key}/{method_key}{preview_ext}',
                }

            scene_entry['views'][view_key] = view_entry

        data['scenes'].append(scene_entry)

    VISUAL_DATA_JS.write_text('window.VISUAL_COMPARISONS_DATA = ' + json.dumps(data, indent=2) + ';\n')
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
                ours_value = view_entry['ours']['metrics'].get(metric_key)
                if ours_value is not None:
                    aggregates[view_key]['ours'][metric_key].append(ours_value)
                for method_key, _ in METHODS:
                    if method_key == 'ours':
                        continue
                    baseline_value = view_entry['baselines'][method_key]['metrics'].get(metric_key)
                    if baseline_value is not None:
                        aggregates[view_key][method_key][metric_key].append(baseline_value)

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


def metric_value_label(metric_key: str, value: float) -> str:
    if metric_key == 'psnr':
        return f'{value:.2f}'
    if metric_key == 'ssim':
        return f'{value:.3f}'
    if metric_key == 'lpips':
        return f'{value:.3f}'
    if metric_key == 'train_time':
        return f'{value:.1f}m'
    if value >= 100:
        return f'{value:.0f}'
    if value >= 10:
        return f'{value:.1f}'
    return f'{value:.2f}'


def annotate_bar_value(axis, metric_key: str, metric_config: Dict[str, object], bar, value: float, text_color: str, face_color: str, edge_color: str) -> None:
    x_pos = bar.get_x() + (bar.get_width() / 2.0)
    if metric_config['log_scale']:
        y_pos = value * 1.1
    else:
        y_min = min(axis.get_ylim())
        y_max = max(axis.get_ylim())
        offset = (y_max - y_min) * 0.035
        y_pos = value + offset
    axis.text(
        x_pos,
        y_pos,
        metric_value_label(metric_key, value),
        ha='center',
        va='bottom',
        fontsize=8.4,
        fontweight='bold',
        color=text_color,
        bbox={
            'boxstyle': 'round,pad=0.22,rounding_size=0.16',
            'facecolor': face_color,
            'edgecolor': edge_color,
            'linewidth': 0.9,
            'alpha': 0.98,
        },
        zorder=6,
        clip_on=False,
    )


def generate_results_charts(data: Dict[str, object]) -> None:
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    averages = compute_averages(data)
    scene_count = len(data['scenes'])

    for view_key, view_label in VIEWS:
        fig, axes = plt.subplots(2, 3, figsize=(14.8, 8.6), dpi=160)
        fig.patch.set_facecolor('#edf3f8')
        flat_axes = axes.flatten()
        metric_axes = flat_axes[:5]
        legend_ax = flat_axes[5]
        legend_ax.axis('off')
        legend_ax.set_facecolor('#fbfdff')
        view_stats = averages[view_key]
        method_keys = [method_key for method_key, _ in METHODS]
        x_positions = list(range(len(method_keys)))

        for axis, metric in zip(metric_axes, RESULTS_METRICS):
            axis.set_facecolor('#fbfdff')
            axis.patch.set_edgecolor('#dbe5f0')
            axis.patch.set_linewidth(1.0)
            axis.grid(True, axis='y', color='#d8e2ee', linewidth=0.9, linestyle=(0, (3, 3)), alpha=0.9)
            axis.grid(False, axis='x')
            axis.set_axisbelow(True)

            values = [metric['transform'](view_stats[method_key][metric['key']]) for method_key in method_keys]
            best_methods = set(best_methods_for_metric(view_stats, metric['key'], metric['higher_better']))
            positive_values = [value for value in values if value > 0]
            if metric['log_scale'] and positive_values:
                axis.set_yscale('log')
                axis.minorticks_off()
                axis.set_ylim(min(positive_values) * 0.72, max(values) * 2.2)
            else:
                max_value = max(values)
                min_value = min(values)
                span = max_value - min_value
                pad = span * 0.22 if span > 0 else max_value * 0.18
                axis.set_ylim(0, max_value + max(pad, max_value * 0.12))

            bars = axis.bar(
                x_positions,
                values,
                width=0.66,
                color=[METHOD_COLORS[method_key] for method_key in method_keys],
                edgecolor='none',
                alpha=0.96,
                zorder=3,
            )

            for bar, method_key, value in zip(bars, method_keys, values):
                if method_key in best_methods:
                    bar.set_edgecolor('#d4a017')
                    bar.set_linewidth(2.8)
                    annotate_bar_value(axis, metric['key'], metric, bar, value, '#6a4800', '#fff6d9', '#d4a017')
                elif method_key == 'ours':
                    bar.set_edgecolor('#0b1e33')
                    bar.set_linewidth(1.6)
                    annotate_bar_value(axis, metric['key'], metric, bar, value, '#173c68', '#eff5fb', '#b6c8dd')
                else:
                    bar.set_edgecolor((0, 0, 0, 0.08))
                    bar.set_linewidth(0.8)

            axis.set_title(metric['title'], loc='left', fontsize=12.6, fontweight='bold', color='#173c68', pad=8)
            axis.set_xticks(x_positions, [METHOD_SHORT[method_key] for method_key in method_keys], rotation=22, ha='right')
            axis.tick_params(axis='x', labelsize=9.2, colors='#334155')
            axis.tick_params(axis='y', labelsize=9.1, colors='#475569')
            axis.yaxis.set_major_formatter(metric_axis_formatter(metric['key']))
            axis.margins(x=0.06)

            for spine in ['top', 'right']:
                axis.spines[spine].set_visible(False)
            axis.spines['left'].set_color('#c8d4e3')
            axis.spines['bottom'].set_color('#c8d4e3')

        legend_ax.text(0.0, 0.965, 'Methods', fontsize=12.6, fontweight='bold', color='#173c68', va='top')
        for index, (method_key, method_label) in enumerate(METHODS):
            y = 0.845 - index * 0.108
            legend_ax.add_patch(Rectangle((0.0, y - 0.03), 0.065, 0.052, transform=legend_ax.transAxes, facecolor=METHOD_COLORS[method_key], edgecolor='#d4a017' if method_key == 'ours' else 'none', linewidth=1.0))
            legend_ax.text(0.095, y, method_label, transform=legend_ax.transAxes, fontsize=10.3, color='#334155', va='center')
        legend_ax.text(
            0.0,
            0.17,
            f'Average over {scene_count} sparse-view scenes.',
            transform=legend_ax.transAxes,
            fontsize=9.8,
            color='#5f6f86',
            va='top',
        )
        legend_ax.text(
            0.0,
            0.09,
            'Gold outlines mark the best method in each panel. Blue value tags call out SGS-4DGS.',
            transform=legend_ax.transAxes,
            fontsize=9.4,
            color='#6a7a91',
            va='top',
            wrap=True,
        )

        fig.suptitle(f'{view_label} Sparse-View Averages', x=0.05, y=0.972, ha='left', fontsize=18.5, fontweight='bold', color='#173c68')
        fig.tight_layout(rect=(0.015, 0.015, 0.985, 0.955))
        fig.savefig(RESULTS_DIR / f'results-{view_key}-bars.svg', format='svg', bbox_inches='tight')
        plt.close(fig)


def render_results_charts(data: Dict[str, object]) -> str:
    scene_count = len(data['scenes'])
    items = []
    for view_key, view_label in VIEWS:
        caption = f'{view_label} averages across {scene_count} sparse-view scenes for PSNR, SSIM, LPIPS, train time, and FPS. Gold outlines mark the best method in each metric panel.'
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
    first_caption = f'{first_view_label} averages across {scene_count} sparse-view scenes for PSNR, SSIM, LPIPS, train time, and FPS. Gold outlines mark the best method in each metric panel.'

    return f'''
  <section class="section section-tight">
    <div class="container is-max-desktop">
      <div class="columns is-centered has-text-centered">
        <div class="column results-panel" data-results-gallery>
          <h2 class="title is-3 results-title">Results</h2>
          <div class="results-divider" aria-hidden="true"></div>
          <div class="content has-text-justified results-summary">
            <p>
              We report the latest sparse-view metrics averaged across the current {scene_count}-scene evaluation set. Use the horizontal selector below to switch
              between the 2-view, 3-view, and 4-view summaries, shown as bar-chart panels for PSNR, SSIM, LPIPS, training time, and FPS.
            </p>
            <p class="results-summary-note">
              Gold outlines mark the best method in each metric panel, and blue value tags call out SGS-4DGS.
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
        r'(<h2 class="title is-3 n3d-showcase-title">)(.*?)(</h2>)',
        r'\1Sparse-View Comparisons\3',
        text,
        count=1,
        flags=re.S,
    )
    text = re.sub(
        r'(<p class="n3d-showcase-summary">)(.*?)(</p>)',
        r'\1\n              Select a scene to update all three sparse-view video comparisons. Each card keeps the SGS-4DGS and baseline videos synchronized, lets you switch the baseline with the arrow controls, and overlays the latest per-scene metrics from the current sparse-view outputs.\n            \3',
        text,
        count=1,
        flags=re.S,
    )
    text = text.replace('aria-label="N3D scene selector"', 'aria-label="Sparse-view scene selector"', 1)
    text = re.sub(
        r'(<div class="content has-text-justified visual-comparisons-summary">\s*<p>)(.*?)(</p>)',
        r'\1\n              Select a scene to update the image comparisons for 2-view, 3-view, and 4-view inputs across the current sparse-view scene set. Each card keeps SGS-4DGS on the left and lets you switch the baseline on the right with the arrow controls.\n            \3',
        text,
        count=1,
        flags=re.S,
    )
    pattern = re.compile(
        r'  <section class="section(?: section-tight)?">\n    <div class="container is-max-desktop">\n      <div class="columns is-centered has-text-centered">\n        <div class="column results-panel.*?</section>\n\n(?=  <section class="section section-tight" data-visual-comparisons>)',
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
    build_visual_comparison_data(data)
    generate_results_charts(data)
    results_section = render_results_charts(data)
    update_index_html(results_section)
    update_index_css()


if __name__ == '__main__':
    main()
