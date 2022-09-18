import React, { createContext, useState, useEffect } from 'react';
// import {promiseLocation} from '../components/Location'
import axios from 'axios'

const KEY = 'fdc0a9d5321ee73e70535ed7d7e052ce'

export const InitialWeatherContext = createContext();

export const InitialWeatherContextProvider = props => {
    const [initialWeather, setInitial] = useState({
      city: null,
      temp: null,
      feels: null
    });
  
    useEffect(() => {
      const fetchLocation = async () => {
        const { coords } = await promiseLocation();
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${KEY}&units=metric`
        );
        setInitial({
          city: response.data.name,
          temp: response.data.main.temp,
          feels: response.data.main.feels_like
        });
      };
  
      fetchLocation();
    }, []);
  
    // ...
    return (
      <InitialWeatherContext.Provider value={{ initialWeather, fillData }}>
        {props.children}
      </InitialWeatherContext.Provider>
    );
  };