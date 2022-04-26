import React from 'react';
import { Box } from '@mui/material';

import * as css from './css';
import { DailyForecast } from '../../utils/types';
import ForecastCard from './ForecastCard';

interface Props {
  weeklyForecast: DailyForecast[]
}

const WeeklyForecast: React.FC<Props> = ({ weeklyForecast }) => (
  <Box css={css.SwitchContainer}>
    {weeklyForecast.slice(1, 6).map((forecast, index) => (
      <ForecastCard dailyForecast={forecast} dayCount={index} />
    ))}
  </Box>
);

export default WeeklyForecast;
