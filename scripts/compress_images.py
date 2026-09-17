import os
import sys
from PIL import Image

IMG_DIR = r'c:\Users\myself\Desktop\WEBSITES\Portfolio\assets\images'

def optimize_images():
    total_before = 0
    total_after = 0
    processed = 0

    for fname in os.listdir(IMG_DIR):
        fpath = os.path.join(IMG_DIR, fname)
        if not os.path.isfile(fpath):
            continue

        ext = os.path.splitext(fname)[1].lower()
        if ext not in ['.png', '.jpg', '.jpeg']:
            continue

        sz_before = os.path.getsize(fpath)
        total_before += sz_before

        try:
            with Image.open(fpath) as im:
                w, h = im.size

                # Resize if unnecessarily large
                max_w = 1400 if ('showcase' in fname.lower() or fname.lower() in [
                    'dexo.png', 'escape.png', 'digisafes.png', 'huge.png', 
                    'visionpro website.png', 'dr pepper website.png', 'adehomes.png', 'ewamaka.png'
                ]) else 1000
                
                if w > max_w:
                    new_h = int(h * (max_w / w))
                    im = im.resize((max_w, new_h), Image.Resampling.LANCZOS)

                temp_path = fpath + '.tmp'
                if ext == '.png':
                    # Check if transparent
                    has_alpha = False
                    if im.mode in ('RGBA', 'LA'):
                        # Check min alpha
                        alpha_extrema = im.getextrema()[-1]
                        has_alpha = alpha_extrema[0] < 255
                    elif im.mode == 'P' and 'transparency' in im.info:
                        has_alpha = True

                    if not has_alpha and im.mode != 'RGB':
                        im = im.convert('RGB')
                        
                    im.save(temp_path, format='PNG', optimize=True)
                else:
                    if im.mode != 'RGB':
                        im = im.convert('RGB')
                    im.save(temp_path, format='JPEG', quality=82, optimize=True)

                sz_temp = os.path.getsize(temp_path)
                if sz_temp < sz_before:
                    os.replace(temp_path, fpath)
                    sz_after = sz_temp
                    print(f"Compressed {fname}: {sz_before/1024:.1f}KB -> {sz_after/1024:.1f}KB (saved {(sz_before-sz_after)/1024:.1f}KB)")
                else:
                    if os.path.exists(temp_path):
                        os.remove(temp_path)
                    sz_after = sz_before

            total_after += sz_after
            processed += 1
        except Exception as e:
            print(f"Error processing {fname}: {e}")
            total_after += sz_before

    print(f"\nDone! Processed {processed} images.")
    print(f"Initial: {total_before / (1024*1024):.2f} MB")
    print(f"Final: {total_after / (1024*1024):.2f} MB")
    print(f"Total saved: {(total_before - total_after) / (1024*1024):.2f} MB")

if __name__ == '__main__':
    optimize_images()
