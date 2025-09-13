# backend/utils/disease_info.py
import pandas as pd
from pathlib import Path

# Paths to CSVs
dataset_path = Path(__file__).resolve().parent.parent / "dataset"

disease_df = pd.read_csv(dataset_path / "diseases.csv")
image_df = pd.read_csv(dataset_path / "image_dataset.csv")

def get_disease_info(label: str):
    """Return disease details from diseases.csv by label."""
    row = disease_df[disease_df['label'] == label]
    if not row.empty:
        return {
            "disease": row.iloc[0]['disease'],
            "description": row.iloc[0]['description'],
            "cure": row.iloc[0]['cure']
        }
    return {"error": f"No information available for label: {label}"}

def get_images_for_label(label: str, limit: int = 5):
    """Return sample images from image_dataset.csv for a given label."""
    rows = image_df[image_df['label'] == label].head(limit)
    if not rows.empty:
        return rows['image_path'].tolist()
    return []
