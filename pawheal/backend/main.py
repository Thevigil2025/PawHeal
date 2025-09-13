from fastapi import FastAPI
from transformers import pipeline
import pandas as pd

app = FastAPI()

# Load your dataset
disease_info = pd.read_csv("C:/Users/legen/Desktop/PawHeal/pawheal/backend/dataset/diseases.csv")

# Load model from local directory
model_path = "C:/Users/legen/Desktop/PawHeal/models/flan-t5-base"
qa_model = pipeline("text2text-generation", model=model_path)

@app.get("/ask")
def ask(question: str, disease: str = None):
    if disease:
        # Filter dataset for that disease
        details = disease_info[disease_info["disease"].str.lower() == disease.lower()]
        if not details.empty:
            context = details.to_dict(orient="records")[0]
        else:
            context = {"note": "Disease not found in database."}
    else:
        context = disease_info.to_dict(orient="records")

    prompt = f"""
    You are a pet healthcare assistant.
    Context: {context}
    Question: {question}
    Answer clearly with first-aid advice.
    """

    response = qa_model(prompt, max_length=200)
    return {"answer": response[0]["generated_text"]}
