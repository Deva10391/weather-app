const config = require('config');

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': config.get('X_RapidAPI_Key'),
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export const WEATHER_API_KEY = config.get('WEATHER_API_KEY');