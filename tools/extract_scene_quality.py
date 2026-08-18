from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


METHOD_KEYS = {
    "4DGaussians": "4DGaussians",
    "CEM-4DGS": "cem4dgs",
    "Sparse4DGS": "ex4dgs",
    "STGS": "spacetimegs",
    "Swift4D": "swift4d",
    "Ours": "ours",
}

BLOCKS = [
    (
        "n3d",
        ["coffee_martini", "cook_spinach", "cut_roasted_beef"],
        "& \\multicolumn{3}{c|}{Coffee Martini}",
    ),
    (
        "n3d",
        ["flame_salmon_1", "flame_steak", "sear_steak"],
        "& \\multicolumn{3}{c|}{Flame Salmon 1}",
    ),
    (
        "techni",
        ["techni-birthday", "techni-fabien", "techni-painter", "techni-theater", "techni-train"],
        "& \\multicolumn{3}{c|}{Birthday}",
    ),
]


def unwrap_rank_macros(line: str) -> str:
    pattern = re.compile(r"\\(?:capbest|capsecond|capthird)\{([^{}]+)\}")
    while pattern.search(line):
        line = pattern.sub(r"\1", line)
    return line


def parse_number(cell: str) -> float:
    match = re.search(r"-?\d+(?:\.\d+)?", cell)
    if not match:
        raise ValueError(f"No numeric value in cell: {cell!r}")
    return float(match.group(0))


def parse_block(text: str, marker: str, scene_keys: list[str]):
    start = text.index(marker)
    end = text.index("\\bottomrule", start)
    block = text[start:end]
    parsed = {scene: {} for scene in scene_keys}
    current_view = None
    for raw_line in block.splitlines():
        if "&" not in raw_line or not raw_line.rstrip().endswith("\\\\"):
            continue
        line = unwrap_rank_macros(raw_line)
        parts = [part.strip() for part in line.rsplit("\\\\", 1)[0].split("&")]
        if len(parts) < 2:
            continue
        view_match = re.search(r"\\multirow\{6\}\{\*\}\{([234])\}", parts[0])
        if view_match:
            current_view = view_match.group(1) + "views"
        method_name = parts[1]
        if current_view is None or method_name not in METHOD_KEYS:
            continue
        values = parts[2:]
        if len(values) != len(scene_keys) * 3:
            raise ValueError(f"Unexpected metric count for {method_name}: {len(values)}")
        method_key = METHOD_KEYS[method_name]
        for scene_index, scene_key in enumerate(scene_keys):
            offset = scene_index * 3
            psnr = parse_number(values[offset])
            dssim = parse_number(values[offset + 1])
            lpips = parse_number(values[offset + 2])
            parsed[scene_key].setdefault(current_view, {})[method_key] = {
                "psnr": psnr,
                "ssim": round(1.0 - 2.0 * dssim, 6),
                "lpips": lpips,
            }
    return parsed


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("supplement", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    text = args.supplement.read_text(encoding="utf-8")
    output = {"n3d": {}, "techni": {}}
    for dataset, scene_keys, marker in BLOCKS:
        output[dataset].update(parse_block(text, marker, scene_keys))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(output, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {args.output}")


if __name__ == "__main__":
    main()
