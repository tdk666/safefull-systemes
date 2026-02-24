import cv2
import numpy as np
import os

os.makedirs('public/logos', exist_ok=True)
img = cv2.imread('public/logoREFERENCES.jpg')
if img is None:
    print("Error: Could not read image.")
    exit(1)

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)

contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
boxes = []
for c in contours:
    x, y, w, h = cv2.boundingRect(c)
    if w > 30 and h > 30:
        boxes.append((x, y, w, h))

if not boxes:
    print("Error: No logos found.")
    exit(1)

# Group logic if logos are composed of multiple parts
def merge_boxes(boxes):
    if not boxes: return []
    boxes.sort(key=lambda b: b[0])
    merged = []
    curr = list(boxes[0])
    for b in boxes[1:]:
        x, y, w, h = b
        # overlap or close
        if x <= curr[0] + curr[2] + 40:
            curr[0] = min(curr[0], x)
            curr[1] = min(curr[1], y)
            curr[2] = max(curr[0]+curr[2], x+w) - curr[0]
            curr[3] = max(curr[1]+curr[3], y+h) - curr[1]
        else:
            merged.append(tuple(curr))
            curr = list(b)
    merged.append(tuple(curr))
    return merged

merged_boxes = merge_boxes(boxes)

count = 1
for x, y, w, h in merged_boxes:
    pad = 10
    x1 = max(0, x - pad)
    y1 = max(0, y - pad)
    x2 = min(img.shape[1], x + w + pad)
    y2 = min(img.shape[0], y + h + pad)
    
    roi = img[y1:y2, x1:x2]
    
    rgba = cv2.cvtColor(roi, cv2.COLOR_BGR2BGRA)
    roi_gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    _, mask = cv2.threshold(roi_gray, 240, 255, cv2.THRESH_BINARY_INV)
    rgba[:, :, 3] = mask
    
    out_path = f'public/logos/client{count}.png'
    cv2.imwrite(out_path, rgba)
    print(f"Saved {out_path}")
    count += 1

print(f"Extracted {count-1} logos.")
