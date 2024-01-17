import React from 'react';


export default function WeatherInfoPage({ weatherData }) {
  if (!weatherData) {
    return null;
  }

  const {
    name,
    weather: [{ main: weatherMain, description: weatherDescription, icon: weatherIcon }],
    main: {temp: weatherTemp}
  } = weatherData;

  let iconImg = "https://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png"

  return (
    <div>
      <p className='text-danger'>Momentaneamente sono disponibili solo città italiane! Work in progress... </p>
      <h2>Località: {name}</h2>
      <div>
        <p>Condizioni meteo: {weatherMain} <img style={{width: "4em"}} src={iconImg} alt="" /></p>
        <p>Maggiori dettagli: nella giornata di oggi {weatherDescription}</p>
        <p>Temperatura: {weatherTemp}</p>
      </div>
    </div>
  );
}
