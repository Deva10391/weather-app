# Weather App

React app showing current weather and 7-day forecast for any searched city.

## Stack
- React 18
- react-select-async-paginate (city search)
- GeoDB Cities API (city lookup)
- OpenWeatherMap API (weather data)

## Setup

```
npm install
```

Create `.env` in root:
```
REACT_APP_GEO_API_KEY=your_rapidapi_key
REACT_APP_WEATHER_API_KEY=your_openweathermap_key
```

## Run

```
npm run dev
```
Opens at `http://localhost:3000`.

## Build

```
npm run build
```

## Deploy (GitHub Pages)

```
npm run deploy
```