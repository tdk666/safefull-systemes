import sys
try:
    from PIL import Image
    
    img = Image.open('Data client/logoSAFEFULL.jpg')
    img = img.resize((150, 150))
    colors = img.getcolors(150*150)
    
    # Sort colors by count (most frequent first)
    colors.sort(reverse=True, key=lambda x: x[0])
    
    print("Dominant Colors (RGB):")
    for count, color in colors[:10]:
        print(f"Count: {count} | Color: {color} | Hex: #{color[0]:02x}{color[1]:02x}{color[2]:02x}")
        
except Exception as e:
    print(f"Error: {e}")
