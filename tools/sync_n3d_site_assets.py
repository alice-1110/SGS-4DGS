from __future__ import annotations

from pathlib import Path
import filecmp
import html
import json
import re
import shutil
from typing import Dict, List, Tuple

REPO = Path(__file__).resolve().parents[1]
SOURCE_ROOT = Path('/home/xuepengcheng/60127A1/gado-gs.github.io/n3d')
DEST_N3D = REPO / 'n3d'
INDEX_HTML = REPO / 'index.html'
INDEX_CSS = REPO / 'static' / 'css' / 'index.css'
DATA_JS = REPO / 'static' / 'js' / 'n3d-showcase-data.js'

VIEWS: List[Tuple[str, str]] = [
    ('2views', '2 Views'),
    ('3views', '3 Views'),
    ('4views', '4 Views'),
]
METHODS: List[Tuple[str, str]] = [
    ('ours', 'Ours'),
    ('4DGaussians', '4DGaussians'),
    ('cem4dgs', 'CEM-4DGS'),
    ('ex4dgs', 'Ex4DGS'),
    ('spacetimegs', 'STGS'),
    ('swift4d', 'Swift4D'),
]
DEFAULT_METHOD_ROTATION = ['4DGaussians', 'cem4dgs', 'ex4dgs', 'spacetimegs', 'swift4d', '4DGaussians']
TABLE_METRICS = [
    {'key': 'psnr', 'label': 'PSNR ↑', 'higher_better': True, 'formatter': lambda value: f'{value:.2f}'},
    {'key': 'ssim', 'label': 'SSIM ↑', 'higher_better': True, 'formatter': lambda value: f'{value:.3f}'},
    {'key': 'lpips', 'label': 'LPIPS ↓', 'higher_better': False, 'formatter': lambda value: f'{value:.3f}'},
    {'key': 'train_time', 'label': 'Train Time (min) ↓', 'higher_better': False, 'formatter': lambda value: f'{value / 60.0:.1f}'},
    {'key': 'model_size', 'label': 'Model Size (MB) ↓', 'higher_better': False, 'formatter': lambda value: f'{value / (1024.0 * 1024.0):.1f}'},
]
RESULTS_CSS = '''
/* Results Tables */
.results-table-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.2rem;
}

.results-summary-note {
  margin: 0.9rem 0 0;
  color: #67748b;
  font-size: 0.95rem;
  line-height: 1.55;
}

.results-table-card {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 0;
  padding: 1.1rem 1.1rem 1rem;
  border-radius: 1.22rem;
  border: 1px solid rgba(124, 138, 163, 0.16);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 248, 252, 0.95));
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.07);
}

.results-table-card__header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.16rem;
}

.results-table-card__title {
  margin: 0;
  color: #173c68;
  font-size: 1.08rem;
  font-weight: 800;
  line-height: 1.15;
}

.results-table-card__meta {
  margin: 0;
  color: #64748b;
  font-size: 0.84rem;
  line-height: 1.4;
}

.results-table-scroll {
  width: 100%;
  overflow-x: auto;
}

.results-metric-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
}

.results-metric-table thead th {
  padding: 0.82rem 0.78rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.22);
  color: #475569;
  font-size: 0.79rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  line-height: 1.2;
  background: rgba(246, 248, 252, 0.92);
  white-space: nowrap;
}

.results-metric-table thead th:first-child {
  border-top-left-radius: 0.9rem;
}

.results-metric-table thead th:last-child {
  border-top-right-radius: 0.9rem;
}

.results-metric-table tbody th,
.results-metric-table tbody td {
  padding: 0.82rem 0.78rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
  color: #0f172a;
  font-size: 0.93rem;
  line-height: 1.2;
  white-space: nowrap;
}

.results-metric-table tbody th {
  font-weight: 700;
  color: #334155;
}

.results-metric-table tbody td {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.results-metric-table tbody tr:nth-child(even):not(.is-ours) th,
.results-metric-table tbody tr:nth-child(even):not(.is-ours) td {
  background: rgba(248, 250, 253, 0.92);
}

.results-metric-table tbody tr:last-child th,
.results-metric-table tbody tr:last-child td {
  border-bottom: none;
}

.results-metric-table tbody tr.is-ours th,
.results-metric-table tbody tr.is-ours td {
  background: rgba(23, 60, 104, 0.045);
}

.results-metric-table tbody tr.is-ours th {
  color: #173c68;
}

.results-metric-table td.is-best {
  background: linear-gradient(180deg, rgba(255, 242, 194, 0.96), rgba(255, 248, 228, 0.96));
  color: #6f4b00;
  font-weight: 800;
  box-shadow: inset 0 0 0 1px rgba(223, 181, 66, 0.34);
}

.results-metric-table td.is-best.is-ours {
  background: linear-gradient(180deg, rgba(255, 238, 173, 0.98), rgba(255, 246, 214, 0.98));
  color: #5a3c00;
}

@media screen and (max-width: 768px) {
  .results-table-card {
    padding: 0.92rem 0.85rem 0.88rem;
  }

  .results-metric-table {
    min-width: 39rem;
  }

  .results-metric-table thead th,
  .results-metric-table tbody th,
  .results-metric-table tbody td {
    padding: 0.7rem 0.62rem;
    font-size: 0.86rem;
  }
}
/* End Results Tables */
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
    aggregates: Dict[str, Dict[str, Dict[str, List[float]]]] = {
        view_key: {method_key: {metric['key']: [] for metric in TABLE_METRICS} for method_key, _ in METHODS}
        for view_key, _ in VIEWS
    }

    for scene in data['scenes']:
        for view_key, _ in VIEWS:
            view_entry = scene['views'][view_key]
            for metric in TABLE_METRICS:
                metric_key = metric['key']
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


def render_results_tables(data: Dict[str, object]) -> str:
    averages = compute_averages(data)
    cards = []

    for view_key, view_label in VIEWS:
        view_stats = averages[view_key]
        best_map = {
            metric['key']: set(best_methods_for_metric(view_stats, metric['key'], metric['higher_better']))
            for metric in TABLE_METRICS
        }
        rows = []
        for method_key, method_label in METHODS:
            row_class = ' class="is-ours"' if method_key == 'ours' else ''
            display_label = 'SGS-4DGS (Ours)' if method_key == 'ours' else method_label
            cells = []
            for metric in TABLE_METRICS:
                classes = []
                if method_key in best_map[metric['key']]:
                    classes.append('is-best')
                if method_key == 'ours':
                    classes.append('is-ours')
                class_attr = f' class="{" ".join(classes)}"' if classes else ''
                value = metric['formatter'](view_stats[method_key][metric['key']])
                cells.append(f'<td{class_attr}>{html.escape(value)}</td>')
            rows.append(
                f'<tr{row_class}><th scope="row">{html.escape(display_label)}</th>{"".join(cells)}</tr>'
            )

        header_cells = ''.join(f'<th scope="col">{html.escape(metric["label"])}</th>' for metric in TABLE_METRICS)
        cards.append(
            f'''
            <article class="results-table-card">
              <div class="results-table-card__header">
                <h3 class="results-table-card__title">{html.escape(view_label)}</h3>
                <p class="results-table-card__meta">Average over 6 N3D scenes</p>
              </div>
              <div class="results-table-scroll">
                <table class="results-metric-table">
                  <thead>
                    <tr>
                      <th scope="col">Method</th>
                      {header_cells}
                    </tr>
                  </thead>
                  <tbody>
                    {''.join(rows)}
                  </tbody>
                </table>
              </div>
            </article>
            '''.strip()
        )

    return f'''
  <section class="section">
    <div class="container is-max-desktop">
      <div class="columns is-centered has-text-centered">
        <div class="column results-panel">
          <h2 class="title is-3 results-title">Results</h2>
          <div class="results-divider" aria-hidden="true"></div>
          <div class="content has-text-justified results-summary">
            <p>
              We report the latest sparse-view N3D metrics averaged across six scenes. The three tables below summarize
              the current 2-view, 3-view, and 4-view means for SGS-4DGS and five dynamic Gaussian splatting baselines,
              using PSNR, SSIM, LPIPS, training time, and model size.
            </p>
            <p class="results-summary-note">
              Highlighted cells indicate the best value in each metric column. Training time is shown in minutes and
              model size is shown in megabytes.
            </p>
          </div>
          <div class="results-table-grid">
            {''.join(cards)}
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
    pattern = re.compile(r'/\* Results Tables \*/.*?/\* End Results Tables \*/', flags=re.S)
    if pattern.search(text):
        text = pattern.sub(RESULTS_CSS.strip(), text, count=1)
    else:
        text = text.rstrip() + '\n\n' + RESULTS_CSS.strip() + '\n'
    INDEX_CSS.write_text(text)


def main() -> None:
    data = build_showcase_data()
    results_section = render_results_tables(data)
    update_index_html(results_section)
    update_index_css()


if __name__ == '__main__':
    main()
