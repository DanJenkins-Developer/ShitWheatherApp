import os
import sys
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
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


app = FastAPI(title="Shit Weather App", version="0.1.0")
api_app = FastAPI(title="Shit Weather API", version="0.1.0")
app.mount("/api", api_app)
app.mount("/", StaticFiles(directory="static", html=True), name="static")

@api_app.get("/weather")
async def weather():
    # Get weather data from OpenWeather API
    url = f"http://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={OPENWEATHER_API_KEY}&units=imperial"
    response = requests.get(url)
    data = response.json()
    return data
