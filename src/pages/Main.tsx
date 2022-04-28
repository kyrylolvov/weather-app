import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import useLocalStorage from 'use-local-storage';
import toast from 'react-hot-toast';

import moment from 'moment';
import { CurrentWeather, DailyForecast } from '../utils/types';
import { useAPI } from '../hooks/useApi';
import { GeolocationErrors, geolocationOptions } from '../utils';
import { getLocation, getWeather } from '../api/search';

import CurrentWeatherInformation from '../components/СurrentWeatherInformation';

import { ReactComponent as Loader } from '../assets/img/Loader.svg';

import * as css from './css';
import Header from '../components/Header';
import WeeklyForecast from '../components/WeeklyForecast';
import DetailedCurrentWeather from '../components/WeeklyForecast/DetailedCurrentWeather';

const Main: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const lastCityStored = localStorage.getItem('lastCity') ?? '';
  const searchedCities = localStorage.getItem('searchedCities') ?? '';

  const [loader, setLoader] = useState(false);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [dailyForecast, setDailyForecast] = useState<DailyForecast[] | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [searchedLocations, setSearchedLocations] = useState<{ lat: number, lon: number, name: string }[]>(!searchedCities ? [] : JSON.parse(searchedCities));

  const { fetch: fetchWeather, state: weatherState } = useAPI(getWeather);
  const { fetch: fetchLocation, state: locationState } = useAPI(getLocation);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const setUpNavigation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {}, () => {}, {});
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather({ lat: position.coords.latitude ?? 43.65107, lon: position.coords.longitude ?? -79.347015 });
          fetchLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
        },
        (error) => {
          fetchWeather({ lat: 43.65107, lon: -79.347015 });
          fetchLocation({ lat: 43.65107, lon: -79.347015 });
          toast.error(GeolocationErrors[error.code]);
        },
        geolocationOptions,
      );
    } else {
      toast.error("Your browser doesn't support geolocation");
    }
  };

  const fetchSearchedLocation = () => {
    const lastCity = JSON.parse(lastCityStored);
    fetchWeather({ lat: lastCity.lat, lon: lastCity.lon });
    fetchLocation({ lat: lastCity.lat, lon: lastCity.lon });
  };

  useEffect(() => {
    setLoader(true);
    if (!lastCityStored) {
      setUpNavigation();
    } else {
      fetchSearchedLocation();
    }
  }, []);

  useEffect(() => {
    if (weatherState.status === 'FULFILLED') {
      setTimeout(() => { if (navigator.geolocation) { setLoader(false); } }, 100);
      setCurrentWeather(weatherState.data.current);
      setDailyForecast(weatherState.data.daily);
    }
  }, [weatherState]);

  useEffect(() => {
    if (locationState.status === 'FULFILLED') {
      setCurrentLocation(locationState.data[0].name);
      const { lat, lon, name } = locationState.data[0];
      const lastCity = { lat, lon, name };
      const lastSearchedLocations = searchedLocations.length > 2 ? searchedLocations.slice(0, -1) : searchedLocations;
      setSearchedLocations([lastCity, ...lastSearchedLocations!]);
      localStorage.setItem('lastCity', JSON.stringify(lastCity));
      if (!searchedLocations.find((x) => x.name === lastCity.name)) localStorage.setItem('searchedCities', JSON.stringify([lastCity, ...lastSearchedLocations]));
    }
  }, [locationState]);

  return !loader ? (
    <Box css={css.container} data-theme={theme}>
      <Box css={css.sidebar(theme)}>
        {currentWeather && (
          <CurrentWeatherInformation
            fetchLocation={fetchLocation}
            fetchWeather={fetchWeather}
            fetchWeatherStatus={weatherState.status}
            setUpNavigation={setUpNavigation}
            temp={currentWeather?.temp}
            location={currentLocation}
            weather={currentWeather.weather[0]}
            date={moment().format('ddd, D MMM')}
          />
        )}
      </Box>
      <Box css={css.mainContainer}>
        <Header isDarkTheme={theme === 'dark'} switchTheme={switchTheme} />
        {dailyForecast && <WeeklyForecast weeklyForecast={dailyForecast} />}
        {currentWeather && (
          <DetailedCurrentWeather
            feelsLike={currentWeather.feels_like}
            uvi={currentWeather.uvi}
            humidity={currentWeather.humidity}
            windDeg={currentWeather.wind_deg}
            windSpeed={currentWeather.wind_speed}
          />
        )}
      </Box>
    </Box>
  ) : (
    <Box data-theme={theme} css={css.loaderContainer}>
      <Loader />
      <Typography className="loading" css={css.loaderText}>
        Preparing your forecast
      </Typography>
    </Box>
  );
};

export default Main;
