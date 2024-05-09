const baseUrl = 'http://localhost:8000';

const button = document.getElementById("button")
const feelLikeId = document.getElementById("feels")
const cityId = document.getElementById("city")
const countryId = document.getElementById("country")
const temperature = document.getElementById("temp")

const picture = document.getElementById("pic")

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
    temperature.innerHTML = data.main.temp

    if (data.main.temp < 69)
      {
        //alert("Cold af")
        feelLikeId.innerHTML = " Cold af"
        picture.src = "./assets/wtf.png"
      }
    else if (data.main.temp >= 69 || data.main.temp <= 78)
    {
      //alert("Nice")
      feelLikeId.innerHTML = data.main.temp + " NICE"
      picture.src = "./assets/nice.png"
    }
    else if(data.main.temp > 78)
      {
        //alert("Ohhhh hot")
        feelLikeId.innerHTML = data.main.temp + " Ohhhh hot"
        picture.src = "./assets/hot.png"
      }
  })
  .catch(error => {
    console.error('Error:', error);
    alert ("Get Fucked idiot!");
  });
}
  

