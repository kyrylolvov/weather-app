import React from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';

import { DailyForecast } from '../../../utils/types';

import * as css from './css';
import getWeatherIcon from '../../СurrentWeatherInformation/utils';

interface Props {
  dailyForecast: DailyForecast;
  dayCount: number;
}

const ForecastCard: React.FC<Props> = ({ dailyForecast, dayCount }) => {
  console.log(dayCount);

  return (
    <Box css={css.cardContainer}>
      <Typography css={css.cardDate}>
        {dayCount === 0 ? 'Tomorrow' : moment.unix(dailyForecast.dt).format('ddd, D MMM')}
      </Typography>
      <Box css={css.cardIconContainer}>{getWeatherIcon(dailyForecast.weather[0].icon.substring(0, 2))}</Box>
      <Box css={css.temperatureContainer}>
        <Typography css={css.maxTemperature}>{`${dailyForecast.temp.max.toFixed(0)}°C`}</Typography>
        <Typography css={css.minTemperature}>{`${dailyForecast.temp.min.toFixed(0)}°C`}</Typography>
      </Box>
    </Box>
  );
};

export default ForecastCard;
