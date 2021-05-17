import './style.scss';
import Weather from './modules/weather'
import UI from './modules/UI'
import defaultCity from './modules/default'

const searchInput = document.getElementById('search-input');
const searchButon = document.getElementById('search');
console.log(defaultCity);


const weather = new Weather('Tunja');
const ui = new UI()

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

searchButon.addEventListener('click', () =>{
  const input = searchInput.value;
  weather.chooseLocation(input);
  fetchWeather()
})

document.addEventListener('DOMContentLoaded',fetchWeather)