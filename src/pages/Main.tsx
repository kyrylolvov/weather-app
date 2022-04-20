import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import useLocalStorage from 'use-local-storage';
import toast from 'react-hot-toast';

import moment from 'moment';
import { Coordinates, CurrentWeather, DailyForecast } from '../utils/types';
import { useAPI } from '../hooks/useApi';
import geolocationOptions from '../utils';
import getWeather from '../api/search';

import CurrentWeatherInformation from '../components/СurrentWeatherInformation';

import * as css from './css';

const Main: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [dailyForecast, setDailyForecast] = useState<DailyForecast | null>(null);

  const { fetch: fetchWeather, state: weatherState } = useAPI(getWeather);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({ lat: position.coords.latitude, lon: position.coords.longitude });
        },
        (error) => {
          toast.error(error.message);
        },
        geolocationOptions,
      );
    } else {
      toast.error("Your browser doesn't support geolocation");
    }
    fetchWeather({ lat: coordinates?.lat ?? 43.65107, lon: coordinates?.lon ?? -79.347015 });
  }, []);

  useEffect(() => {
    if (weatherState.status === 'FULFILLED') {
      setCurrentWeather(weatherState.data.current);
      setDailyForecast(weatherState.data.daily);
    }
  }, [weatherState]);

  console.log(dailyForecast);

  return (
    <Box css={css.container} data-theme={theme}>
      <Box css={css.sidebar(theme)}>
        {currentWeather
        && <CurrentWeatherInformation temp={currentWeather?.temp} weather={currentWeather.weather[0]} date={moment().format('ddd, D MMM')} />}
      </Box>
      <Box onClick={switchTheme}>Main</Box>
    </Box>
  );
};

export default Main;
