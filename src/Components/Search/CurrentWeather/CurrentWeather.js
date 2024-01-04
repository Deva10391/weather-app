import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {

    if (!data) {
        return null;
    }

    return (
        <div className='weather' style={{
            width: '300px',
            borderRadius: '6px',
            boxShadow: '10px -2px 20px 2px rgb(0, 0, 0, 0.3)',
            color: '#fff',
            backgroundColor: '#333',
            margin: '20px auto 0 auto',
            padding: '0 20px 20px 20px',
        }}>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <img
                    src={`icons/${data.weather[0].icon}.png`}
                    className='weather-icon'
                    alt='weather' />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div style={{ width: '100%' }}></div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details: </span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like: </span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind: </span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity: </span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure: </span>
                        <span className='parameter-value'>{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CurrentWeather;