import { CurrentWeather, DailyForecast, Location } from '../utils/types';
import instance from './instance';

export const getWeather = async ({ lat, lon }: { lat: number; lon: number }) => instance.get<{ current: CurrentWeather; daily: DailyForecast[]; timezone: 'string'; lat: number; lon: number }>(
  '/data/2.5/onecall',
  {
    params: {
      lat,
      lon,
      units: 'metric',
      appid: 'e5d0aeca41a181bf5eda281dd41ff4af',
      exclude: 'minutely,hourly,alerts',
    },
  },
);

export const getCoordinates = async (searchText: string) => instance.get<Location[]>('/geo/1.0/direct', {
  params: {
    q: searchText,
    appid: 'e5d0aeca41a181bf5eda281dd41ff4af',
    limit: 5,
  },
});

export const getLocation = async ({ lat, lon }: { lat: number; lon: number }) => instance.get<Location[]>('/geo/1.0/reverse', {
  params: {
    lat,
    lon,
    appid: 'e5d0aeca41a181bf5eda281dd41ff4af',
    limit: 1,
  },
});
