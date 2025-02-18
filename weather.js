let weather = {
  paris: { temp: 19.7, humidity: 80 },
  tokyo: { temp: 17.3, humidity: 50 },
  lisbon: { temp: 30.2, humidity: 20 },
  "san francisco": { temp: 20.9, humidity: 100 },
  oslo: { temp: -5, humidity: 20 },
};

function convertToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let city = document.getElementById("city-input").value.trim().toLowerCase();

    // Update the h2 element with the city name
    document.getElementById("city-name").textContent =
      city.charAt(0).toUpperCase() + city.slice(1);
  });

function updateWeather(city) {
  const cityData = weather[city];
  const celsiusTemp = Math.round(cityData.temp);
  const fahrenheitTemp = convertToFahrenheit(cityData.temp);

  document.getElementById("search-result").textContent = `
    It is currently ${celsiusTemp}°C (${fahrenheitTemp}°F) in ${
    city.charAt(0).toUpperCase() + city.slice(1)
  } with a humidity of ${cityData.humidity}%.
  `;
}

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDateTime = now.toLocaleString("en-US", options);
  document.getElementById(
    "current-date-time"
  ).textContent = `Today is: ${formattedDateTime}`;
}

document.addEventListener("DOMContentLoaded", updateDateTime);
