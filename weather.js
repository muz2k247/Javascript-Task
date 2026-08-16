const btn = document.getElementById("btn");
let outputEl = document.querySelector(".output")

async function weather() {
const response = await fetch(
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true'
);

const data = await response.json();

outputEl.textContent = `Temp: ${data.current_weather.temperature}°C, Wind: ${data.current_weather.windspeed} km/h`;

return outputEl

}
