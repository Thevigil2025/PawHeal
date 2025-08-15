from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from model.predict import predict_wound
from utils.first_aid_guide import get_first_aid_info

app = FastAPI()

# CORS for Flutter
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use your Flutter web or mobile origin here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze/")
async def analyze_image(file: UploadFile = File(...)):
    image_bytes = await file.read()
    wound_type = predict_wound(image_bytes)
    response = get_first_aid_info(wound_type)
    return {"wound_type": wound_type, "first_aid": response}
