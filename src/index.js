import './style.scss';
console.log('holas');
const search = document.getElementById('search');
const searchInput = document.getElementById('search-input')
const getWeather = async (city) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=88dd50190cb7c4a2c8e55d61d1341d41`,

      { mode: 'cors' },
    );
    weatherData = await response.json();
    
    const { name } = weatherData;
    const { temp } = weatherData.main;
    const { id, main } = weatherData.weather[0];
    
    loc.textContent = name;
    climate.textContent = main;
    tempValue.textContent = `${Math.round(temp)} °C`;
    if (id < 300 && id > 200) {
      tempIcon.src = '../src/animated/thunder.svg';
    } else if (id < 400 && id > 300) {
      tempIcon.src = '../src/animated/rainy-2.svg';
    } else if (id < 600 && id > 500) {
      tempIcon.src = '../src/animated/cloudy-day-2.svg';
    } else if (id < 700 && id > 600) {
      tempIcon.src = '../src/animated/snowy-6.svg';
    } else if (id < 800 && id > 700) {
      tempIcon.src = '../src/animated/cloudy-day-2.svg';
    } else if (id === 800) {
      tempIcon.src = '../src/animated/day.svg';
    } else if (id < 900 && id > 800) {
      tempIcon.src = '../src/animated/cloudy.svg';
    }

    displayC.addEventListener('click', () => {
      displayC.style.display = 'none';
      displayF.style.display = 'block';
      tempValue.textContent = `${Math.round(temp)} °C`;
    });

    displayF.addEventListener('click', () => {
      displayF.style.display = 'none';
      displayC.style.display = 'block';
      tempValue.textContent = `${Math.round((temp * 9) / 5 + 32)} °F`;
    });
  } catch (error) {
    console.log('No city found'); /* eslint-disable-line no-console */
  }
};

search.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(searchInput.value);
  console.log(searchInput.value)
weatherData.then((data) => {})
    
  searchInput.value = '';
});

console.log(getWeather('Tunja'))

