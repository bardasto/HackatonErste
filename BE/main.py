from fastapi import FastAPI
from models.model import predict_churn
from schemas.request import CustomerData

app = FastAPI()

@app.post("/predict")
async def predict(customer_data: CustomerData):
    # Convert the Pydantic model to a dictionary
    data = customer_data.dict()
    probability = predict_churn(data)
    return {"probability_of_exit": f"{100 - probability:.2f}%"}
