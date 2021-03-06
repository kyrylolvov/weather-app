export interface Coordinates {
  lat: number | null
  lon: number | null
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
  dt: number,
  temp: {
    min: number,
    max: number,
  }
  weather: [{
    icon: string,
    main: string,
  }]
}

export interface Weather {
  icon: string,
  main: string,
}

export interface Location {
  name: string,
  lat: number,
  lon: number,
  country: string,
  state?: string,
}
