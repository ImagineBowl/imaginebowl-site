#!/usr/bin/env python3
"""Copy official ImagineBowl logo and generate favicon sizes."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SRC = Path(
    "/Users/ahsansmac/.cursor/projects/Users-ahsansmac-Documents-ImagineBowl-Projects-ImagineBowl/assets/ImagineBowl-1c7f647e-426c-4426-b584-e746b3159cf9.png"
)


def main() -> None:
    PUBLIC.mkdir(exist_ok=True)
    src = Image.open(SRC).convert("RGBA")
    src.save(PUBLIC / "logo.png", optimize=True)

    for size, name in [(32, "favicon-32.png"), (180, "apple-touch-icon.png")]:
        src.resize((size, size), Image.Resampling.LANCZOS).save(PUBLIC / name)

    print("Wrote:", PUBLIC / "logo.png")
    print("Wrote:", PUBLIC / "favicon-32.png", PUBLIC / "apple-touch-icon.png")


if __name__ == "__main__":
    main()
