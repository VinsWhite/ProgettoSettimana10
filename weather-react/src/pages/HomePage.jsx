import React, { useState, useEffect } from 'react';
import SearchBarComponent from '../components/SearchBarComponent';
import axios from 'axios';
import { api, apiNews } from '../data/api';
import WeatherInfoPage from './WeatherInfoPage';
import NewsComponent from '../components/NewsComponent'

export default function HomePage() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    if (location) {
      axios
        .get(`${api}${location},it&APPID=5bf8407213e9cba296d93cff8a0af152&units=metric&lang=it`, { timeout: 5000 })
        .then(response => {
          console.log("Risposta del server:", response.data);
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error("Errore durante la richiesta:", error);
        });
    }
  }, [location]);

  useEffect(() => {
    axios
        .get(apiNews, { timeout: 5000 })
        .then(response => {
          console.log("Risposta del server:", response.data);
          setNews(response.data);
        })
        .catch(error => {
          console.error("Errore durante la richiesta:", error);
        });
  }, [])

  const handleSearch = () => {
    if (location.trim() !== '') {
      axios
        .get(`${api}${location},it&APPID={apikey}&units=metric&lang=it`, { timeout: 5000 })
        .then(response => {
          console.log("Risposta del server:", response.data);
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error("Errore durante la richiesta:", error);
        });
    }
  };

  return (
    <>
      <SearchBarComponent
        location={location}
        setLocation={setLocation}
        handleSearch={handleSearch}
      />
      <WeatherInfoPage weatherData={weatherData} />
      <NewsComponent news={news}/>
    </>
  );
}
