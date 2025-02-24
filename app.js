// Select HTML elements
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');

// API endpoint and key (replace with your actual API key)
const apiKey = 'ef24bf6e0dc5ffdf3e661afdae45d5b8'; // Get this from OpenWeather or another weather API provider
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
function getWeather(city) {
  fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        cityName.textContent = `Weather in ${data.name}`;
        temperature.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      } else {
        cityName.textContent = "City not found";
        temperature.textContent = "";
        description.textContent = "";
        weatherIcon.src = "";
      }
    })
    .catch(err => console.error(err));
}

// Event listener for the search button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});
