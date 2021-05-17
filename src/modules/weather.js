export default class Weather {
  constructor (city) {
    this.city = city;
  }

  async getWeather () {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=88dd50190cb7c4a2c8e55d61d1341d41`;
    const response = await fetch(apiUrl,{ mode: 'cors' });
    const data = await response.json();
    return data
  }

  chooseLocation(city) {
    this.city = city;
  }
}


