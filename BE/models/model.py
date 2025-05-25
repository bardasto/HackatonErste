import joblib
import pandas as pd

# Load the model and scaler
rf_model = joblib.load("models/random_forest_model.pkl")
scaler = joblib.load("models/scaler.pkl")

def predict_churn(data: dict):
    # Convert input data to DataFrame
    client_data = pd.DataFrame({
        'CreditScore': [data['CreditScore']],
        'Gender': [1 if data['Gender'].lower() == 'male' else 0],
        'Age': [data['Age']],
        'Tenure': [data['Tenure']],
        'Balance': [data['Balance']],
        'NumOfProducts': [data['NumOfProducts']],
        'HasCrCard': [data['HasCrCard']],
        'IsActiveMember': [data['IsActiveMember']],
        'EstimatedSalary': [data['EstimatedSalary']],
        'Geography_Germany': [1 if data['Geography'].lower() == 'germany' else 0],
        'Geography_Spain': [1 if data['Geography'].lower() == 'spain' else 0]
    })

    # Scale the data
    client_data = scaler.transform(client_data)

    # Predict churn probability
    rf_prediction = rf_model.predict_proba(client_data)[:, 1]
    return rf_prediction[0] * 100  # Return as a percentage
