import os
import sys
from fastapi import FastAPI
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
try:
    OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
    CITY = os.getenv("CITY")
except KeyError:
    print("Please set the OPENWEATHER_API_KEY and CITY environment variables")
    sys.exit(1)

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Welcome to ShitWeatherApp"}

@app.get("/weather")
async def weather():
    # Get weather data from OpenWeather API
    url = f"http://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={OPENWEATHER_API_KEY}&units=imperial"
    response = requests.get(url)
    data = response.json()
    return data
