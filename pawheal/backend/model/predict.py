from PIL import Image
import io
import torch
import torchvision.transforms as transforms
import joblib

# Load model (replace with your own)
model = joblib.load("model/model.pkl")

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

def predict_wound(image_bytes):
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    img_tensor = transform(image).unsqueeze(0)
    with torch.no_grad():
        output = model(img_tensor)
        _, predicted = output.max(1)
    wound_classes = ['bleeding', 'fracture', 'infection', 'burn', 'minor_cut']
    return wound_classes[predicted.item()]
