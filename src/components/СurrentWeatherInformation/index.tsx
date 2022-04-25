import React from 'react';
import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import { LocationOn, MyLocation } from '@mui/icons-material';

import * as css from './css';
import { Weather } from '../../utils/types';
import getWeatherIcon from './utils';

interface Props {
  temp: number,
  weather: Weather,
  date: string,
}

const CurrentWeatherInformation: React.FC<Props> = ({ temp, weather, date }) => {
  console.log(weather);

  return (
    <Box css={css.container}>
      <Box css={css.buttonsContainer}>
        <Button css={css.searchButton}>Seach for places</Button>
        <IconButton css={css.navigationButton}><MyLocation /></IconButton>
      </Box>
      <Box css={css.iconContainer}>
        {getWeatherIcon(weather.icon.substring(0, 2))}
      </Box>
      <Typography css={css.temperatureText}>
        {`${temp.toFixed(0)}°C`}
      </Typography>
      <Typography css={css.weatherText}>{weather.main}</Typography>
      <Box>
        <Typography css={css.dateText}>{`Today • ${date}`}</Typography>
        <Box css={css.textWithIcon}>
          <LocationOn sx={{ marginRight: '8px' }} />
          <Typography css={css.dateText}>Toronto</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentWeatherInformation;
