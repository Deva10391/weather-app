import { useState } from 'react';
import './App.css';
import CurrentWeather from './Components/Search/CurrentWeather/CurrentWeather';
import Search from './Components/Search/Search';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import Forecast from './Components/Forecast/Forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcastWeather, setForcastWeather] = useState(null);

  console.log(currentWeather);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(', ');
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forcastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise
      .all([currentWeatherFetch, forcastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const forcastResponse = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForcastWeather({ city: searchData.label, ...forcastResponse });
      })
      .catch(async (err) => {
        console.error(err);
      })
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather data={currentWeather} />
      {forcastWeather && <Forecast data={forcastWeather} />}
    </div>
  );
}

export default App;
