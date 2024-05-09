const baseUrl = 'http://localhost:8000';

const button = document.getElementById("button")
const feelLikeId = document.getElementById("feels")
const cityId = document.getElementById("city")
const countryId = document.getElementById("country")

button.addEventListener("click", getCurrentWeather);

function getCurrentWeather() {

  
  const path = "/api/weather"
  
  const apiUrl = baseUrl + path
  
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    feelLikeId.innerHTML = data.weather[0].description
    cityId.innerHTML = data.name
    countryId.innerHTML = data.sys.country
  })
  .catch(error => {
    console.error('Error:', error);
    alert ("Get Fucked idiot!");
  });
}
  

