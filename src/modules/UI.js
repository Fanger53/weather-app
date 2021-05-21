/* eslint-disable no-useless-concat */
export default class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.temperature = document.getElementById('temperature');
    this.desc = document.getElementById('description');
    this.humidity = document.getElementById('humidity');
    this.wind = document.getElementById('wind');
    this.tempSpan = document.getElementById('temp-span');
    this.bodyBg = document.getElementById('body');
  }

  render(weather) {
    this.location.textContent = weather.name;
    this.temperature.textContent = `${Math.round(weather.main.temp)}` + 'C°';
    this.desc.textContent = weather.weather[0].description;
    this.humidity.textContent = `${weather.main.humidity} %`;
    this.wind.textContent = `${weather.wind.speed} m/s`;
  }

  changeTemp(weather) {
    if (this.tempSpan.textContent === 'C') {
      this.tempSpan.textContent = 'F';
    } else if (this.tempSpan.textContent === 'F') {
      this.temperature.textContent = `${Math.round((weather.main.temp * 9) / 5 + 32)} °F`;
      this.tempSpan.textContent = '';
    } else {
      this.tempSpan.textContent = 'C';
      this.temperature.textContent = `${Math.round(weather.main.temp)}` + 'C°';
    }
  }

  changeTempColor(weather) {
    if (`${Math.round(weather.main.temp)}` >= 15 && `${Math.round(weather.main.temp)}` <= 22) {
      this.bodyBg.classList.add('warm');
      this.bodyBg.classList.remove('cold', 'hot', 'default');
    } else if (`${Math.round(weather.main.temp)}` <= 15) {
      this.bodyBg.classList.add('cold');
      this.bodyBg.classList.remove('warm', 'hot', 'default');
    } else if (`${Math.round(weather.main.temp)}` >= 23) {
      this.bodyBg.classList.add('hot');
      this.bodyBg.remove.className('cold', 'warm', 'default');
    }
  }
}
