import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent))


from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model.predict import predict_wound
from utils.first_aid_guide import get_first_aid_info

app = FastAPI(title="Wound Analysis API")

# Enable CORS for all origins (adjust in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your Flutter app URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze/")
async def analyze_image(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid file type. Upload an image.")

    try:
        image_bytes = await file.read()
        wound_type = predict_wound(image_bytes)
        first_aid_info = get_first_aid_info(wound_type)
        return {"wound_type": wound_type, "first_aid": first_aid_info}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {e}")
