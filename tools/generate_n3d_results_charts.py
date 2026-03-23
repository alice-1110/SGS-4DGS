from pathlib import Path
import json
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

REPO = Path(__file__).resolve().parents[1]
ROOT = Path('/home/xuepengcheng/60127A1/gado-gs.github.io/n3d')
OUT_DIR = REPO / 'static' / 'images' / 'results'
VIEWS = [('2views', '2 Views'), ('3views', '3 Views'), ('4views', '4 Views')]
METHODS = [
    ('ours', 'Ours', '#173c68', 'o'),
    ('4DGaussians', '4DGaussians', '#f28b30', 's'),
    ('cem4dgs', 'CEM-4DGS', '#28a39d', '^'),
    ('ex4dgs', 'Ex4DGS', '#d45555', 'D'),
    ('spacetimegs', 'STGS', '#7b63c9', 'P'),
    ('swift4d', 'Swift4D', '#4e8f2f', 'X'),
]
METRICS = [
    {
        'metric': 'model_size',
        'filename': 'chart-01-compression.svg',
        'title': 'Model Size Across Sparse-View Settings',
        'ylabel': 'Model size (MB)',
        'higher_better': False,
        'log_scale': True,
        'transform': lambda value: value / (1024 * 1024),
        'footer': 'Average over 6 N3D scenes. Lower is better. Log scale.',
    },
    {
        'metric': 'train_time',
        'filename': 'chart-02-training.svg',
        'title': 'Training Time Across Sparse-View Settings',
        'ylabel': 'Train time (minutes)',
        'higher_better': False,
        'log_scale': True,
        'transform': lambda value: value / 60.0,
        'footer': 'Average over 6 N3D scenes. Lower is better. Log scale.',
    },
    {
        'metric': 'fps',
        'filename': 'chart-03-fps.svg',
        'title': 'Rendering Throughput Across Sparse-View Settings',
        'ylabel': 'Rendering FPS',
        'higher_better': True,
        'log_scale': True,
        'transform': lambda value: value,
        'footer': 'Average over 6 N3D scenes. Higher is better. Log scale.',
    },
    {
        'metric': 'psnr',
        'filename': 'chart-04-psnr.svg',
        'title': 'PSNR Across Sparse-View Settings',
        'ylabel': 'PSNR',
        'higher_better': True,
        'log_scale': False,
        'transform': lambda value: value,
        'footer': 'Average over 6 N3D scenes. Higher is better.',
    },
    {
        'metric': 'ssim',
        'filename': 'chart-05-ssim.svg',
        'title': 'SSIM Across Sparse-View Settings',
        'ylabel': 'SSIM',
        'higher_better': True,
        'log_scale': False,
        'transform': lambda value: value,
        'footer': 'Average over 6 N3D scenes. Higher is better.',
    },
    {
        'metric': 'lpips',
        'filename': 'chart-06-lpips.svg',
        'title': 'LPIPS Across Sparse-View Settings',
        'ylabel': 'LPIPS',
        'higher_better': False,
        'log_scale': False,
        'transform': lambda value: value,
        'footer': 'Average over 6 N3D scenes. Lower is better.',
    },
    {
        'metric': 'eval_time',
        'filename': 'chart-07-breakdown.svg',
        'title': 'Evaluation Time Across Sparse-View Settings',
        'ylabel': 'Eval time (seconds)',
        'higher_better': False,
        'log_scale': True,
        'transform': lambda value: value,
        'footer': 'Average over 6 N3D scenes. Lower is better. Log scale.',
    },
]


def aggregate():
    metrics = [entry['metric'] for entry in METRICS]
    acc = {method_key: {view_key: {metric: [] for metric in metrics} for view_key, _ in VIEWS} for method_key, *_ in METHODS}
    for view_key, _ in VIEWS:
        for method_key, *_ in METHODS:
            for result_path in (ROOT / view_key / method_key).glob('*/result.json'):
                data = json.loads(result_path.read_text())
                for metric in metrics:
                    if metric in data:
                        acc[method_key][view_key][metric].append(float(data[metric]))
    return {
        method_key: {
            view_key: {
                metric: (sum(values) / len(values) if values else None)
                for metric, values in metric_map.items()
            }
            for view_key, metric_map in view_map.items()
        }
        for method_key, view_map in acc.items()
    }


def nice_number_formatter(metric_name):
    if metric_name == 'model_size':
        return FuncFormatter(lambda value, pos: f'{value:.1f}' if value < 10 else f'{value:.0f}')
    if metric_name == 'train_time':
        return FuncFormatter(lambda value, pos: f'{value:.1f}' if value < 10 else f'{value:.0f}')
    if metric_name == 'fps':
        return FuncFormatter(lambda value, pos: f'{value:.1f}' if value < 10 else f'{value:.0f}')
    if metric_name == 'eval_time':
        return FuncFormatter(lambda value, pos: f'{value:.1f}' if value < 10 else f'{value:.0f}')
    if metric_name == 'ssim':
        return FuncFormatter(lambda value, pos: f'{value:.2f}')
    if metric_name == 'lpips':
        return FuncFormatter(lambda value, pos: f'{value:.2f}')
    return FuncFormatter(lambda value, pos: f'{value:.0f}')


def generate():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    agg = aggregate()
    x_positions = [2, 3, 4]
    x_labels = [label for _, label in VIEWS]

    for config in METRICS:
        fig, ax = plt.subplots(figsize=(8.8, 5.2), dpi=160)
        fig.patch.set_facecolor('#f4f7fb')
        ax.set_facecolor('#ffffff')
        ax.grid(True, axis='y', color='#d9e2ef', linewidth=0.85, alpha=0.85)
        ax.grid(False, axis='x')
        ax.set_axisbelow(True)

        for method_key, label, color, marker in METHODS:
            values = []
            for view_key, _ in VIEWS:
                raw = agg[method_key][view_key][config['metric']]
                values.append(config['transform'](raw) if raw is not None else float('nan'))
            ax.plot(
                x_positions,
                values,
                label=label,
                color=color,
                linewidth=3.0 if method_key == 'ours' else 2.1,
                marker=marker,
                markersize=7.2 if method_key == 'ours' else 6.0,
                markerfacecolor='#ffffff' if method_key != 'ours' else color,
                markeredgewidth=1.6,
                alpha=1.0 if method_key == 'ours' else 0.96,
                solid_capstyle='round',
            )

        if config['log_scale']:
            ax.set_yscale('log')

        ax.set_xticks(x_positions, x_labels)
        ax.tick_params(axis='x', labelsize=11, colors='#334155')
        ax.tick_params(axis='y', labelsize=10, colors='#475569')
        ax.yaxis.set_major_formatter(nice_number_formatter(config['metric']))
        ax.set_ylabel(config['ylabel'], fontsize=11, color='#334155')
        ax.set_title(config['title'], loc='left', fontsize=16, fontweight='bold', color='#173c68', pad=16)
        ax.text(
            0.0,
            1.01,
            config['footer'],
            transform=ax.transAxes,
            ha='left',
            va='bottom',
            fontsize=9.6,
            color='#5b6b84',
        )

        for spine in ['top', 'right']:
            ax.spines[spine].set_visible(False)
        ax.spines['left'].set_color('#c7d3e3')
        ax.spines['bottom'].set_color('#c7d3e3')

        legend = ax.legend(
            loc='upper center',
            bbox_to_anchor=(0.5, -0.18),
            ncol=3,
            fontsize=9.4,
            frameon=False,
            handlelength=2.4,
            columnspacing=1.2,
        )
        for text in legend.get_texts():
            text.set_color('#334155')

        fig.tight_layout(rect=(0, 0.05, 1, 1))
        fig.savefig(OUT_DIR / config['filename'], format='svg', bbox_inches='tight')
        plt.close(fig)


if __name__ == '__main__':
    generate()
