from PIL import Image
from collections import Counter

img = Image.open(r"C:\Users\Abdul Rehman\Downloads\price.png").convert("RGB")
W, H = img.size
print(f"SIZE: {W}x{H}")

px = img.load()

# Overall dominant colors
cnt = Counter()
for y in range(0, H, 3):
    for x in range(0, W, 3):
        cnt[px[x, y]] += 1
print("\nTOP COLORS:")
for c, n in cnt.most_common(12):
    print(f"  #{c[0]:02x}{c[1]:02x}{c[2]:02x}  rgb{c}  {n}")

# Find vertical separator lines (columns that are mostly uniform non-white)
print("\nVERTICAL LINES (column color profile):")
for x in range(0, W):
    col = [px[x, y] for y in range(0, H, 6)]
    dark = sum(1 for c in col if sum(c) < 720)
    if dark > len(col) * 0.85:
        print(f"  x={x} color=#{px[x,H//2][0]:02x}{px[x,H//2][1]:02x}{px[x,H//2][2]:02x}")

# Find horizontal lines
print("\nHORIZONTAL LINES:")
for y in range(0, H):
    row = [px[x, y] for x in range(0, W, 6)]
    dark = sum(1 for c in row if sum(c) < 720)
    if dark > len(row) * 0.85:
        print(f"  y={y} color=#{px[10,y][0]:02x}{px[10,y][1]:02x}{px[10,y][2]:02x}")
