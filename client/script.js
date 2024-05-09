const baseUrl = 'server:8000';

const button = document.getElementById("button")
const feelLikeId = document.getElementById("feels")
const cityId = document.getElementById("city")
const countryId = document.getElementById("country")

button.addEventListener("click", getCurrentWeather);

function getCurrentWeather() {

    alert ("Get Fucked idiot!");

    const path = "/weather"

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
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Feels like
  // city 
  // country

//   feelLikeId.innerHTML = "Test"
//   cityId.innerHTML = "Test"
//   countryId.innerHTML = "Test"

  feelLikeId.innerHTML = data.weather.description
  cityId.innerHTML = data.name
  countryId.innerHTML = data.sys.country


//   const w_description = data.weather.description
//   const w_city = data.name
//   const w_country = data.sys.country


}
  

