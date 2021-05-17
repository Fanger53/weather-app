export default class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.temperature = document.getElementById('temperature');
    this.desc = document.getElementById('description');
    this.humidity = document.getElementById('humidity');
    this.wind = document.getElementById('wind');
  }

  render(weather) {
    this.location.textContent = weather.name;
    // eslint-disable-next-line no-useless-concat
    this.temperature.textContent = `${Math.round(weather.main.temp)} °C` + ` / ${Math.round((weather.main.temp * 9) / 5 + 32)} °F`;
    this.desc.textContent = weather.weather[0].description;
    this.humidity.textContent = `${weather.main.humidity} %`;
    this.wind.textContent = `${weather.wind.speed} m/s`;
  }
}