from __future__ import annotations

import json
import math
from html import escape
from pathlib import Path
from typing import Dict


REPO = Path(__file__).resolve().parents[1]
SHOWCASE_DATA = REPO / "static" / "js" / "n3d-showcase-data.js"
VISUAL_DATA = REPO / "static" / "js" / "visual-comparisons-data.js"
RESULTS_DIR = REPO / "static" / "images" / "results"
SCENE_QUALITY_FILE = REPO / "static" / "data" / "scene-quality.json"

METHODS = [
    ("ours", "SGS-4DGS", "#173c68"),
    ("4DGaussians", "4DGaussians", "#f28b30"),
    ("cem4dgs", "CEM-4DGS", "#28a39d"),
    ("ex4dgs", "Sparse4DGS", "#d45555"),
    ("spacetimegs", "STGS", "#7b63c9"),
    ("swift4d", "Swift4D", "#4e8f2f"),
]

METHOD_LABELS = dict((key, label) for key, label, _ in METHODS)
METHOD_COLORS = dict((key, color) for key, _, color in METHODS)
DATASET_LABELS = {"n3d": "N3DV", "techni": "Technicolor"}
VIEW_LABELS = {"2views": "2 Views", "3views": "3 Views", "4views": "4 Views"}


def row(psnr, ssim, lpips, opt, fps, size, tof):
    return {
        "psnr": psnr,
        "ssim": ssim,
        "lpips": lpips,
        "opt": opt,
        "fps": fps,
        "size": size,
        "tof": tof,
    }


# Confirmed scene-averaged measurements used by the MMAsia manuscript.
RESULTS = {
    "n3d": {
        "2views": {
            "4DGaussians": row(21.680, 0.808, 0.156, 2320.0, 121.5, 28.8, 3.85),
            "ex4dgs": row(21.387, 0.758, 0.217, 4714.5, 119.4, 100.1, 3.55),
            "spacetimegs": row(20.992, 0.786, 0.206, 2106.5, 149.8, 43.5, 3.42),
            "swift4d": row(22.765, 0.820, 0.136, 2065.8, 132.4, 82.9, 2.78),
            "cem4dgs": row(21.593, 0.771, 0.202, 7727.8, 46.4, 250.8, 3.75),
            "ours": row(26.082, 0.879, 0.094, 1246.3, 241.1, 30.2, 2.25),
        },
        "3views": {
            "4DGaussians": row(27.533, 0.892, 0.080, 2377.4, 117.1, 31.2, 2.65),
            "ex4dgs": row(25.153, 0.864, 0.112, 4956.1, 112.2, 111.5, 2.75),
            "spacetimegs": row(25.819, 0.874, 0.106, 2245.1, 139.4, 48.6, 2.58),
            "swift4d": row(27.298, 0.893, 0.073, 2147.0, 126.0, 89.7, 2.12),
            "cem4dgs": row(25.423, 0.869, 0.104, 7590.3, 47.1, 250.3, 2.82),
            "ours": row(28.840, 0.911, 0.064, 1291.8, 230.2, 32.7, 1.72),
        },
        "4views": {
            "4DGaussians": row(28.412, 0.902, 0.074, 2427.8, 117.8, 33.7, 2.22),
            "ex4dgs": row(26.517, 0.878, 0.101, 5181.2, 107.6, 122.4, 2.38),
            "spacetimegs": row(27.100, 0.886, 0.096, 2383.2, 131.9, 54.2, 2.22),
            "swift4d": row(28.230, 0.905, 0.068, 2199.9, 123.1, 96.5, 1.88),
            "cem4dgs": row(26.725, 0.881, 0.094, 7468.3, 48.4, 251.8, 2.48),
            "ours": row(29.610, 0.921, 0.058, 1346.5, 221.9, 35.3, 1.52),
        },
    },
    "techni": {
        "2views": {
            "4DGaussians": row(20.482, 0.652, 0.220, 1350.2, 66.2, 58.3, 5.15),
            "ex4dgs": row(21.116, 0.667, 0.201, 1915.5, 119.2, 83.5, 4.55),
            "spacetimegs": row(23.548, 0.782, 0.121, 771.9, 117.1, 52.0, 3.82),
            "swift4d": row(21.182, 0.711, 0.162, 1443.5, 153.1, 42.1, 3.48),
            "cem4dgs": row(21.326, 0.673, 0.194, 4622.2, 79.1, 106.7, 4.45),
            "ours": row(26.562, 0.856, 0.073, 632.9, 132.5, 57.6, 2.85),
        },
        "3views": {
            "4DGaussians": row(23.858, 0.751, 0.154, 1399.8, 63.6, 63.6, 3.75),
            "ex4dgs": row(24.699, 0.791, 0.115, 2028.3, 112.1, 93.2, 3.65),
            "spacetimegs": row(26.528, 0.856, 0.073, 832.2, 110.1, 58.8, 2.98),
            "swift4d": row(25.294, 0.818, 0.089, 1494.9, 148.1, 46.3, 2.78),
            "cem4dgs": row(24.421, 0.796, 0.110, 4531.7, 80.3, 107.3, 3.55),
            "ours": row(28.748, 0.890, 0.053, 666.3, 127.1, 62.6, 2.32),
        },
        "4views": {
            "4DGaussians": row(25.910, 0.800, 0.127, 1429.8, 61.6, 68.7, 3.15),
            "ex4dgs": row(27.168, 0.851, 0.079, 2149.2, 106.0, 105.4, 3.05),
            "spacetimegs": row(29.026, 0.891, 0.052, 895.7, 100.4, 66.1, 2.48),
            "swift4d": row(27.956, 0.872, 0.066, 1553.7, 142.3, 49.7, 2.38),
            "cem4dgs": row(27.232, 0.855, 0.075, 4459.0, 79.6, 107.8, 2.88),
            "ours": row(30.010, 0.903, 0.046, 694.5, 120.0, 67.7, 2.02),
        },
    },
}


METRICS = [
    ("psnr", "PSNR ↑", True, False),
    ("ssim", "SSIM ↑", True, False),
    ("lpips", "LPIPS ↓", False, False),
    ("tof", "tOF (px) ↓", False, False),
    ("opt", "Optimization Time (s) ↓", False, True),
    ("fps", "FPS ↑", True, True),
    ("size", "Model Size (MB) ↓", False, True),
]

def load_window_json(path: Path, prefix: str) -> Dict[str, object]:
    text = path.read_text(encoding="utf-8")
    if not text.startswith(prefix):
        raise ValueError(f"Unexpected JavaScript wrapper in {path}")
    payload = text[len(prefix) :].strip()
    if payload.endswith(";"):
        payload = payload[:-1]
    return json.loads(payload)


def write_window_json(path: Path, prefix: str, data: Dict[str, object]) -> None:
    path.write_text(prefix + json.dumps(data, indent=2) + ";\n", encoding="utf-8")


def update_showcase_data() -> None:
    prefix = "window.N3D_SHOWCASE_DATA = "
    data = load_window_json(SHOWCASE_DATA, prefix)
    scene_quality = json.loads(SCENE_QUALITY_FILE.read_text(encoding="utf-8"))
    for method in data["methodOrder"]:
        method["label"] = METHOD_LABELS[method["key"]]

    accum = {
        dataset: {
            view: {method: {metric: [] for metric in ("psnr", "ssim", "lpips")} for method, _, _ in METHODS}
            for view in VIEW_LABELS
        }
        for dataset in DATASET_LABELS
    }

    for scene in data["scenes"]:
        dataset = scene["datasetKey"]
        scene["datasetLabel"] = DATASET_LABELS[dataset]
        for view, view_entry in scene["views"].items():
            quality_view = scene_quality[dataset][scene["key"]][view]
            view_entry["ours"]["metrics"].update(quality_view["ours"])
            view_entry["ours"]["metrics"]["fps_avg"] = RESULTS[dataset][view]["ours"]["fps"]
            for metric in ("psnr", "ssim", "lpips"):
                accum[dataset][view]["ours"][metric].append(view_entry["ours"]["metrics"][metric])
            for method, baseline in view_entry["baselines"].items():
                baseline["label"] = METHOD_LABELS[method]
                baseline["metrics"].update(quality_view[method])
                baseline["metrics"]["fps_avg"] = RESULTS[dataset][view][method]["fps"]
                for metric in ("psnr", "ssim", "lpips"):
                    accum[dataset][view][method][metric].append(baseline["metrics"][metric])

    for dataset, view_map in accum.items():
        for view, method_map in view_map.items():
            for method, metric_map in method_map.items():
                for metric, values in metric_map.items():
                    observed = sum(values) / len(values)
                    expected = RESULTS[dataset][view][method][metric]
                    tolerance = 0.015 if metric == "psnr" else 0.0015
                    if abs(observed - expected) > tolerance:
                        raise ValueError(
                            f"Quality mismatch for {dataset}/{view}/{method}/{metric}: "
                            f"scene mean {observed:.6f}, manuscript {expected:.6f}"
                        )

    data["efficiencyScope"] = "fps_avg is the scene-averaged inference throughput for the dataset/view setting."
    write_window_json(SHOWCASE_DATA, prefix, data)


def update_visual_data() -> None:
    prefix = "window.VISUAL_COMPARISONS_DATA = "
    data = load_window_json(VISUAL_DATA, prefix)
    for method in data["methodOrder"]:
        method["label"] = METHOD_LABELS[method["key"]]
    for scene in data["scenes"]:
        scene["datasetLabel"] = DATASET_LABELS[scene["datasetKey"]]
        for view_entry in scene["views"].values():
            for method, baseline in view_entry["baselines"].items():
                baseline["label"] = METHOD_LABELS[method]
    write_window_json(VISUAL_DATA, prefix, data)


def value_label(metric: str, value: float) -> str:
    if metric == "psnr":
        return f"{value:.2f}"
    if metric in {"ssim", "lpips"}:
        return f"{value:.3f}"
    if metric == "tof":
        return f"{value:.2f}"
    if metric == "opt":
        return f"{value:.1f}"
    if metric == "fps":
        return f"{value:.1f}"
    return f"{value:.1f}"


def svg_text(x, y, text, size=16, fill="#334155", weight="normal", anchor="start", transform=None):
    attrs = [
        f'x="{x:.1f}"',
        f'y="{y:.1f}"',
        f'font-size="{size}"',
        f'fill="{fill}"',
        f'font-weight="{weight}"',
        f'text-anchor="{anchor}"',
        'font-family="Inter, Segoe UI, Arial, sans-serif"',
    ]
    if transform:
        attrs.append(f'transform="{transform}"')
    return f'<text {" ".join(attrs)}>{escape(str(text))}</text>'


def render_metric_panel(dataset, view, metric, title, higher_better, log_scale, x, y, width, height):
    method_keys = [key for key, _, _ in METHODS]
    method_short = {
        "ours": "SGS-4DGS",
        "4DGaussians": "4DGauss",
        "cem4dgs": "CEM-4DGS",
        "ex4dgs": "Sparse4DGS",
        "spacetimegs": "STGS",
        "swift4d": "Swift4D",
    }
    values = [RESULTS[dataset][view][method][metric] for method in method_keys]
    best = max(values) if higher_better else min(values)
    plot_left = x + 47
    plot_right = x + width - 16
    plot_top = y + 52
    plot_bottom = y + height - 72
    plot_height = plot_bottom - plot_top
    plot_width = plot_right - plot_left
    if log_scale:
        low = math.log10(min(values) * 0.72)
        high = math.log10(max(values) * 2.15)
        project = lambda value: plot_bottom - (math.log10(value) - low) / (high - low) * plot_height
        tick_values = [10 ** (low + i * (high - low) / 4) for i in range(5)]
    else:
        low = 0.0
        high = max(values) * 1.24
        project = lambda value: plot_bottom - (value - low) / (high - low) * plot_height
        tick_values = [high * i / 4 for i in range(5)]

    chunks = [
        f'<rect x="{x}" y="{y}" width="{width}" height="{height}" rx="14" fill="#fbfdff" stroke="#dbe5f0"/>',
        svg_text(x + 18, y + 31, title + (" · log" if log_scale else ""), 17, "#173c68", "700"),
    ]
    for tick in tick_values:
        tick_y = project(tick)
        chunks.append(f'<line x1="{plot_left}" y1="{tick_y:.1f}" x2="{plot_right}" y2="{tick_y:.1f}" stroke="#d8e2ee" stroke-dasharray="4 4"/>')
        if metric in {"ssim", "lpips", "tof"}:
            label = f"{tick:.2f}"
        elif tick >= 1000:
            label = f"{tick / 1000:.1f}k"
        else:
            label = f"{tick:.0f}"
        chunks.append(svg_text(plot_left - 7, tick_y + 4, label, 11, "#64748b", anchor="end"))

    slot = plot_width / len(method_keys)
    bar_width = slot * 0.58
    base_y = project(min(values) * 0.72) if log_scale else plot_bottom
    for index, (method, value) in enumerate(zip(method_keys, values)):
        center_x = plot_left + slot * (index + 0.5)
        top_y = project(value)
        bar_y = min(top_y, base_y)
        bar_h = max(2.0, abs(base_y - top_y))
        if abs(value - best) <= 1e-9:
            stroke, stroke_width, tag_fill, tag_text = "#d4a017", 3.0, "#fff6d9", "#6a4800"
        elif method == "ours":
            stroke, stroke_width, tag_fill, tag_text = "#0b1e33", 2.0, "#eff5fb", "#173c68"
        else:
            stroke, stroke_width, tag_fill, tag_text = "#ffffff", 0.5, None, None
        chunks.append(
            f'<rect x="{center_x - bar_width / 2:.1f}" y="{bar_y:.1f}" width="{bar_width:.1f}" height="{bar_h:.1f}" '
            f'rx="3" fill="{METHOD_COLORS[method]}" stroke="{stroke}" stroke-width="{stroke_width}"/>'
        )
        if tag_fill:
            label = value_label(metric, value)
            tag_width = max(43, 8.2 * len(label) + 12)
            tag_y = max(plot_top + 2, top_y - 27)
            chunks.append(
                f'<rect x="{center_x - tag_width / 2:.1f}" y="{tag_y:.1f}" width="{tag_width:.1f}" height="20" '
                f'rx="6" fill="{tag_fill}" stroke="{stroke}" stroke-width="1"/>'
            )
            chunks.append(svg_text(center_x, tag_y + 14, label, 11, tag_text, "700", "middle"))
        text_x = center_x - 4
        text_y = plot_bottom + 22
        chunks.append(svg_text(text_x, text_y, method_short[method], 10.5, "#475569", anchor="end", transform=f"rotate(-24 {text_x:.1f} {text_y:.1f})"))
    return chunks


def generate_charts_svg() -> None:
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    canvas_width, canvas_height = 1600, 860
    margin_x, margin_y = 28, 82
    gap_x, gap_y = 18, 18
    panel_width = (canvas_width - margin_x * 2 - gap_x * 3) / 4
    panel_height = (canvas_height - margin_y - 32 - gap_y) / 2
    for dataset, dataset_label in DATASET_LABELS.items():
        for view, view_label in VIEW_LABELS.items():
            svg = [
                '<?xml version="1.0" encoding="UTF-8"?>',
                f'<svg xmlns="http://www.w3.org/2000/svg" width="{canvas_width}" height="{canvas_height}" viewBox="0 0 {canvas_width} {canvas_height}">',
                '<rect width="100%" height="100%" fill="#edf3f8"/>',
                svg_text(34, 46, f"{dataset_label} · {view_label} Sparse-View Results", 28, "#173c68", "700"),
                svg_text(34, 70, "Confirmed MMAsia manuscript measurements", 13, "#64748b"),
            ]
            for index, metric_config in enumerate(METRICS):
                row_index, col_index = divmod(index, 4)
                x = margin_x + col_index * (panel_width + gap_x)
                y = margin_y + row_index * (panel_height + gap_y)
                svg.extend(render_metric_panel(dataset, view, *metric_config, x, y, panel_width, panel_height))

            x = margin_x + 3 * (panel_width + gap_x)
            y = margin_y + panel_height + gap_y
            svg.append(f'<rect x="{x}" y="{y}" width="{panel_width}" height="{panel_height}" rx="14" fill="#fbfdff" stroke="#dbe5f0"/>')
            svg.append(svg_text(x + 20, y + 35, "Reading the figure", 18, "#173c68", "700"))
            svg.append(f'<rect x="{x + 22}" y="{y + 62}" width="36" height="24" rx="4" fill="#fff6d9" stroke="#d4a017" stroke-width="3"/>')
            svg.append(svg_text(x + 72, y + 79, "Gold: best displayed value", 13, "#334155"))
            svg.append(f'<rect x="{x + 22}" y="{y + 103}" width="36" height="24" rx="4" fill="#eff5fb" stroke="#173c68" stroke-width="2"/>')
            svg.append(svg_text(x + 72, y + 120, "Blue: SGS-4DGS when not first", 13, "#334155"))
            notes = [
                "Quality and tOF are scene averages.",
                "Opt. excludes one-off preprocessing.",
                "FPS is inference-only at the fixed",
                "output resolution stated in the paper.",
                "Sparse4DGS is retrained with sparse",
                "synchronized cameras.",
            ]
            for note_index, note in enumerate(notes):
                svg.append(svg_text(x + 22, y + 166 + note_index * 24, note, 13, "#5f6f86"))
            svg.append('</svg>')
            (RESULTS_DIR / f"results-{dataset}-{view}-bars.svg").write_text("\n".join(svg), encoding="utf-8")


def main() -> None:
    update_showcase_data()
    update_visual_data()
    generate_charts_svg()
    print("Updated showcase labels, setting-level FPS values, and six MMAsia result charts.")


if __name__ == "__main__":
    main()
