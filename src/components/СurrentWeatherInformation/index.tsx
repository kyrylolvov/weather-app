import React, { useState } from 'react';
import {
  Autocomplete,
  Box, Button, IconButton, InputBase, Typography,
} from '@mui/material';
import { Close, LocationOn, MyLocation } from '@mui/icons-material';

import * as css from './css';
import { Weather } from '../../utils/types';
import getWeatherIcon from './utils';

interface Props {
  temp: number,
  weather: Weather,
  date: string,
  setUpNavigation: () => void;
  location: string;
}

const CurrentWeatherInformation: React.FC<Props> = ({
  temp, weather, date, setUpNavigation, location,
}) => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

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
              css={css.searchInput}
              forcePopupIcon={false}
              disablePortal
              id="combo-box-demo"
              options={[{ label: 'Nice' }]}
              renderInput={(params) => {
                const { InputLabelProps, InputProps, ...rest } = params;
                return <InputBase placeholder="Search location" {...params.InputProps} {...rest} />;
              }}
            />
            <Button css={css.searchButtonAction}>Search</Button>
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
              <Typography css={css.dateText}>{location.length > 0 ? location.split('/')[1] : ''}</Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CurrentWeatherInformation;
