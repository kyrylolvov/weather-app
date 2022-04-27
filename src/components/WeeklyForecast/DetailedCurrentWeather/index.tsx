import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

import { Navigation } from '@mui/icons-material';
import * as css from './css';
import degToCompass from './utils';

interface Props {
  feelsLike: number,
  uvi: number,
  humidity: number,
  windDeg: number,
  windSpeed: number,
}

const DetailedCurrentWeather: React.FC<Props> = ({
  feelsLike, uvi, humidity, windDeg, windSpeed,
}) => (
  <Box css={css.sectionContainer}>
    <Typography css={css.sectionTitle}>
      Today’s Hightlights
    </Typography>
    <Box css={css.cardsContainer}>
      <Box css={css.cardComponent}>
        <Typography css={css.cardTitle}>Feels Like</Typography>
        <Typography css={css.cardText}>{`${feelsLike.toFixed(0)}°C`}</Typography>
      </Box>
      <Box css={css.cardComponent}>
        <Typography css={css.cardTitle}>Ultraviolet Index (UVI)</Typography>
        <Typography css={css.cardText}>{uvi > 0 ? uvi.toFixed(1) : 0}</Typography>
      </Box>
      <Box css={css.cardComponent}>
        <Typography css={css.cardTitle}>Humidity</Typography>
        <Typography css={css.cardText}>{`${humidity}%`}</Typography>
        <Box>
          <Box css={css.progressBarNumbers}>
            <Typography>0</Typography>
            <Typography>50</Typography>
            <Typography>100</Typography>
          </Box>
          <LinearProgress css={css.progressBar} variant="determinate" value={humidity} />
          <Box css={css.progressBarPercentage}>
            <Typography>%</Typography>
          </Box>
        </Box>
      </Box>
      <Box css={css.cardComponent}>
        <Typography css={css.cardTitle}>Wind Status</Typography>
        <Typography css={css.cardText}>{`${windSpeed.toFixed(0)} kph`}</Typography>
        <Box css={css.windContainer}>
          <Box css={css.windIconContainer}>
            <Navigation sx={{ transform: `rotate(${windDeg}deg)` }} />
          </Box>
          <Typography>{degToCompass(windDeg)}</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default DetailedCurrentWeather;
