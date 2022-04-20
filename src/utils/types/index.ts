export interface Coordinates {
  lat: number
  lon: number
}

export interface CurrentWeather {
  feels_like: number,
  temp: number,
  uvi: number,
  humidity: number,
  wind_deg: number,
  wind_speed: number,
  weather: [{
    icon: string,
    main: string,
  }]
}

export interface DailyForecast {
  temp: {
    min: number,
    max: number,
  }
  weather: {
    icon: string,
    main: string,
  }
}

export interface Weather {
  icon: string,
  main: string,
}
