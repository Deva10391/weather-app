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
REACT_APP_X_RapidAPI_Key=your_rapidapi_key
REACT_APP_WEATHER_API_KEY=your_openweathermap_key
```

Add `.env` to `.gitignore`:
```
echo .env >> .gitignore
```

Create `src/api.js`:
```javascript
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
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