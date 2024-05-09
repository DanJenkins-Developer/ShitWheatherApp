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
    // feelLikeId.innerHTML = data.weather[0].description
    //feelLikeId.innerHTML = "F U"
    cityId.innerHTML = data.name
    countryId.innerHTML = data.sys.country

    if (data.main.temp < 69)
      {
        //alert("Cold af")
        feelLikeId.innerHTML = " Cold af"
      }
    else if (data.main.temp >= 69 || data.main.temp <= 78)
    {
      //alert("Nice")
      feelLikeId.innerHTML = data.main.temp + " NICE"
    }
    else if(data.main.temp > 78)
      {
        //alert("Ohhhh hot")
        feelLikeId.innerHTML = data.main.temp + " Ohhhh hot"
      }
  })
  .catch(error => {
    console.error('Error:', error);
    alert ("Get Fucked idiot!");
  });
}
  

