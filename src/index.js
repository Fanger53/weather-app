import './style.scss';
import Weather from './modules/weather';
import UI from './modules/UI';

const searchInput = document.getElementById('search-input');
const searchButon = document.getElementById('search');
const switchButton = document.getElementById('switch-temperature');

const weather = new Weather('barbosa');
const ui = new UI();

const fetchWeather = async () => {
  const data = await weather.getWeather();
  ui.render(data);
  ui.changeTemp(data);
  ui.changeTempColor(data);
};

searchButon.addEventListener('click', () => {
  const input = searchInput.value;
  weather.chooseLocation(input);
  fetchWeather();
});

switchButton.addEventListener('click', () => {
  fetchWeather();
});

document.addEventListener('DOMContentLoaded', fetchWeather);
