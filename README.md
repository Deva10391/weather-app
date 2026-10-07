# Weather App
 
## Problem
 
Quick weather lookup for any city.
 
## Solution
 
Search a city through GeoDB Cities (RapidAPI), then show current weather and a 7-day forecast from OpenWeatherMap, with forecast days ordered starting from today.
 
## Speciality
 
Async paginated city search feeding the weather calls.
 
## Simplified Working
 
Type a city, pick it, see now and the week ahead.
 
## Utilities
 
React 18, react-select-async-paginate, GeoDB Cities API, OpenWeatherMap API
 
## Setup
 
```
npm install
```
 
Create `.env` in root:
```
REACT_APP_X_RapidAPI_Key=your_rapidapi_key
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