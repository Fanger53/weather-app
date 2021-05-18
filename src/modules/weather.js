export default class Weather {
  constructor(city) {
    this.apiKey = '88dd50190cb7c4a2c8e55d61d1341d41';
    this.city = city;
  }

  getWeather = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`;
    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();
    return data;
  }

  chooseLocation(city) {
    this.city = city;
  }
}
