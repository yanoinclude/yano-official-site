from pathlib import Path
import sys

import numpy as np
from PIL import Image


SOURCE = Path(sys.argv[1])
OUTPUT = Path(sys.argv[2])
CANVAS_WIDTH = 160
CANVAS_HEIGHT = 264
FOOT_Y = 260

# Measured character bounds in reading order. These deliberately do not use
# 1254 / 6 or 1254 / 5 because the artwork is not laid out on an even grid.
BOUNDS = [
    (42, 21, 120, 240), (226, 22, 121, 239), (425, 21, 97, 239),
    (603, 21, 106, 240), (784, 21, 106, 240), (977, 20, 103, 240),
    (42, 272, 115, 242), (243, 272, 85, 242), (414, 272, 114, 241),
    (599, 272, 110, 241), (788, 272, 105, 241), (967, 272, 123, 242),
    (47, 526, 117, 244), (228, 526, 118, 243), (419, 526, 98, 244),
    (606, 526, 87, 249), (793, 526, 85, 249), (978, 526, 85, 249),
    (52, 784, 86, 241), (234, 784, 84, 241), (416, 784, 84, 241),
    (598, 784, 84, 241), (784, 784, 83, 241), (967, 784, 84, 241),
    (42, 1036, 86, 214), (233, 1036, 104, 214), (419, 1036, 105, 214),
    (607, 1036, 104, 214), (793, 1036, 86, 214), (979, 1036, 85, 214),
]


def remove_green(image: Image.Image) -> Image.Image:
    rgba = np.asarray(image.convert("RGBA"), dtype=np.float32)
    rgb = rgba[..., :3]
    red, green, blue = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    dominance = green - np.maximum(red, blue)

    # Full transparency for definite green-screen pixels, with a narrow
    # feathered band for antialiased edges.
    alpha = np.ones_like(green) * 255
    definite = (green > 105) & (dominance >= 42)
    feather = (green > 90) & (dominance > 16) & ~definite
    alpha[definite] = 0
    alpha[feather] = np.clip((42 - dominance[feather]) / 26 * 255, 0, 255)

    # Remove green spill from partially transparent edge pixels. Limiting the
    # correction to keyed pixels protects skin and the yellow/orange artwork.
    keyed = definite | feather
    neutral_green = (red + blue) * 0.5
    rgb[..., 1][keyed] = np.minimum(green[keyed], neutral_green[keyed] + 8)

    rgba[..., :3] = np.clip(rgb, 0, 255)
    rgba[..., 3] = alpha
    return Image.fromarray(rgba.astype(np.uint8), "RGBA")


def main() -> None:
    source = Image.open(SOURCE).convert("RGBA")
    if source.size != (1254, 1254):
        raise ValueError(f"Expected 1254x1254 source, received {source.size}")

    OUTPUT.mkdir(parents=True, exist_ok=True)
    frames = []
    for index, (x, y, width, height) in enumerate(BOUNDS, start=1):
        crop = source.crop((x, y, x + width, y + height))
        keyed = remove_green(crop)
        canvas = Image.new("RGBA", (CANVAS_WIDTH, CANVAS_HEIGHT), (0, 0, 0, 0))
        left = round((CANVAS_WIDTH - width) / 2)
        top = FOOT_Y - height
        canvas.alpha_composite(keyed, (left, top))
        frame_path = OUTPUT / f"frame-{index:02d}.png"
        canvas.save(frame_path, optimize=True)
        frames.append(canvas)

    sheet = Image.new(
        "RGBA", (CANVAS_WIDTH * len(frames), CANVAS_HEIGHT), (0, 0, 0, 0)
    )
    for index, frame in enumerate(frames):
        sheet.alpha_composite(frame, (index * CANVAS_WIDTH, 0))
    sheet.save(OUTPUT.parent / "yano-30frames-v4.png", optimize=True)

    contact = Image.new(
        "RGBA", (CANVAS_WIDTH * 6, CANVAS_HEIGHT * 5), (235, 245, 255, 255)
    )
    for index, frame in enumerate(frames):
        contact.alpha_composite(
            frame, ((index % 6) * CANVAS_WIDTH, (index // 6) * CANVAS_HEIGHT)
        )
    contact_path = Path("reference/yano-30frames-contact-v4.png")
    contact_path.parent.mkdir(parents=True, exist_ok=True)
    contact.save(contact_path, optimize=True)


if __name__ == "__main__":
    main()
