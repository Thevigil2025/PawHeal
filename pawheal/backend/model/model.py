import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load the dataset
# Make sure the path to your dataset is correct
df = pd.read_csv('../dataset/diseases.csv')

# Prepare the data
# Assuming the last column is the target (y)
X = df.iloc[:, :-1]
y = df.iloc[:, -1]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the trained model to a .pkl file
# This will overwrite the old, incompatible model file
joblib.dump(model, 'model.pkl')

print("Model successfully trained and saved as 'model/model.pkl'")