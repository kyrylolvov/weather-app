import { CurrentWeather, DailyForecast } from '../utils/types';
import instance from './instance';

const getWeather = async ({ lat, lon }: { lat: number, lon: number }) => instance.get<{ current: CurrentWeather, daily: DailyForecast }>('/data/2.5/onecall', {
  params: {
    lat,
    lon,
    units: 'metric',
    appid: 'e5d0aeca41a181bf5eda281dd41ff4af',
    exclude: 'minutely,hourly,alerts',
  },
});

export default getWeather;
