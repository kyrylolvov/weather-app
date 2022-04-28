import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Autocomplete, Box, Button, IconButton, InputBase, Typography,
} from '@mui/material';
import {
  Close, LocationOn, MyLocation, Search,
} from '@mui/icons-material';

import * as css from './css';
import { Location, Weather } from '../../utils/types';
import getWeatherIcon from './utils';
import { useAPI } from '../../hooks/useApi';
import { getCoordinates } from '../../api/search';

interface Props {
  temp: number;
  weather: Weather;
  date: string;
  setUpNavigation: () => void;
  location: string;
  fetchWeather: ({ lat, lon }:{ lat: number, lon: number }) => void
  fetchLocation: ({ lat, lon }:{ lat: number, lon: number }) => void
  fetchWeatherStatus: string
}

const CurrentWeatherInformation: React.FC<Props> = ({
  temp, weather, date, setUpNavigation, location, fetchWeather, fetchWeatherStatus, fetchLocation,
}) => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [searchLocations, setSearchLocations] = useState<Location[]>([]);

  const { fetch: fetchCoordinates, state: coordinatesState } = useAPI(getCoordinates);

  useEffect(() => {
    if (window.innerWidth < 600) { document.body.style.overflow = sideMenuOpened ? 'hidden' : 'auto'; }
  }, [sideMenuOpened]);

  const validationSchema = yup.object({
    location: yup.object({
      name: yup.string().required('Please, provide a valid location'),
      lat: yup.number().required('Please, provide a valid location'),
      lon: yup.number().required('Please, provide a valid location'),
      country: yup.string().required('Please, provide a valid location'),
      state: yup.string(),
    }),
  });

  const initialValues = {
    location: {
      name: '',
    },
  };

  const {
    values, setFieldValue, handleSubmit, isSubmitting, setSubmitting,
  } = useFormik<any>({
    validationSchema,
    initialValues,
    onSubmit: (submitValues) => {
      fetchWeather({ lat: submitValues.location.lat, lon: submitValues.location.lon });
      fetchLocation({ lat: submitValues.location.lat, lon: submitValues.location.lon });
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (coordinatesState.status === 'FULFILLED') {
      setSearchLocations(coordinatesState.data);
    }
  }, [coordinatesState]);

  useEffect(() => {
    if (fetchWeatherStatus === 'FULFILLED') {
      setSubmitting(false);
      setSideMenuOpened(false);
    }
  }, [fetchWeatherStatus]);

  return (
    <Box>
      {sideMenuOpened ? (
        <Box css={css.menuContainer}>
          <Box css={css.closeIconContainer}>
            <IconButton onClick={() => setSideMenuOpened(false)}>
              <Close />
            </IconButton>
          </Box>
          <Box css={css.searchContainer}>
            <Autocomplete
              options={searchLocations}
              value={values.location}
              onChange={(e, selectedLocation: Location) => {
                setFieldValue('location', selectedLocation);
              }}
              css={css.searchInput}
              forcePopupIcon={false}
              disablePortal
              id="combo-box-demo"
              getOptionLabel={(selectedLocation) => (selectedLocation.name && selectedLocation.country
                ? `${selectedLocation.name}${selectedLocation.state ? `, ${selectedLocation.state}` : ''}, ${
                  selectedLocation.country
                }`
                : '')}
              renderInput={(params) => {
                const { InputLabelProps, InputProps, ...rest } = params;
                const { ref, className } = InputProps;
                return (
                  <InputBase
                    placeholder="Search location"
                    startAdornment={<Search sx={{ color: '#616475', marginRight: '16px' }} />}
                    onChange={(e) => { if (e.target.value.length > 3) fetchCoordinates(e.target.value); }}
                    ref={ref!}
                    className={className!}
                    {...rest}
                  />
                );
              }}
            />
            <Button onClick={() => handleSubmit()} disabled={isSubmitting} css={css.searchButtonAction}>
              Search
            </Button>
          </Box>
        </Box>
      ) : (
        <Box css={css.container}>
          <Box css={css.buttonsContainer}>
            <Button onClick={() => setSideMenuOpened(true)} css={css.searchButton}>
              Seach for places
            </Button>
            <IconButton onClick={setUpNavigation} css={css.navigationButton}>
              <MyLocation />
            </IconButton>
          </Box>
          <Box css={css.iconContainer}>{getWeatherIcon(weather.icon.substring(0, 2))}</Box>
          <Typography css={css.temperatureText}>{`${temp.toFixed(0)}°C`}</Typography>
          <Typography css={css.weatherText}>{weather.main}</Typography>
          <Box>
            <Typography css={css.dateText}>{`Today • ${date}`}</Typography>
            <Box css={css.textWithIcon}>
              <LocationOn sx={{ marginRight: '8px' }} />
              <Typography css={css.dateText}>{location}</Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CurrentWeatherInformation;
