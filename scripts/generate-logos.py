#!/usr/bin/env python3
"""Copy ImagineBowl light/dark logos and generate favicon sizes."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
ASSETS = ROOT / "assets"

LIGHT_SRC = ASSETS / "logo-light-mode.png"
DARK_SRC = ASSETS / "logo-dark-mode.png"
MASTER_PX = 1024


def main() -> None:
    if not LIGHT_SRC.exists() or not DARK_SRC.exists():
        raise SystemExit(
            f"Missing assets. Expected:\n  {LIGHT_SRC}\n  {DARK_SRC}"
        )

    PUBLIC.mkdir(exist_ok=True)
    light = Image.open(LIGHT_SRC).convert("RGB")
    dark = Image.open(DARK_SRC).convert("RGB")

    light.resize((MASTER_PX, MASTER_PX), Image.Resampling.LANCZOS).save(
        PUBLIC / "logo.png", optimize=True
    )
    dark.resize((MASTER_PX, MASTER_PX), Image.Resampling.LANCZOS).save(
        PUBLIC / "logo-light.png", optimize=True
    )

    for size, name in [(32, "favicon-32.png"), (180, "apple-touch-icon.png")]:
        light.resize((size, size), Image.Resampling.LANCZOS).save(PUBLIC / name)

    print("Wrote:", PUBLIC / "logo.png", f"({MASTER_PX}×{MASTER_PX}, light UI)")
    print("Wrote:", PUBLIC / "logo-light.png", f"({MASTER_PX}×{MASTER_PX}, dark UI)")
    print("Wrote:", PUBLIC / "favicon-32.png", PUBLIC / "apple-touch-icon.png")


if __name__ == "__main__":
    main()
