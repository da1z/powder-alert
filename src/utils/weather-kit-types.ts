export interface WeatherKitResponse {
  currentWeather: CurrentWeather;
  forecastDaily: ForecastDaily;
  forecastHourly: ForecastHourly;
  forecastNextHour: ForecastNextHour;
}

export interface CurrentWeather {
  name: string;
  metadata: Metadata;
  asOf: string;
  cloudCover: number;
  conditionCode: string;
  daylight: boolean;
  humidity: number;
  precipitationIntensity: number;
  pressure: number;
  pressureTrend: string;
  temperature: number;
  temperatureApparent: number;
  temperatureDewPoint: number;
  uvIndex: number;
  visibility: number;
  windDirection: number;
  windGust: number;
  windSpeed: number;
}

export interface Metadata {
  attributionURL: string;
  expireTime: string;
  latitude: number;
  longitude: number;
  readTime: string;
  reportedTime: string;
  units: string;
  version: number;
}

export interface ForecastDaily {
  name: string;
  metadata: Metadata2;
  days: Day[];
}

export interface Metadata2 {
  attributionURL: string;
  expireTime: string;
  latitude: number;
  longitude: number;
  readTime: string;
  reportedTime: string;
  units: string;
  version: number;
}

export interface Day {
  forecastStart: string;
  forecastEnd: string;
  conditionCode: string;
  maxUvIndex: number;
  moonPhase: string;
  moonrise?: string;
  moonset: string;
  precipitationAmount: number;
  precipitationChance: number;
  precipitationType: string;
  snowfallAmount: number;
  solarMidnight: string;
  solarNoon: string;
  sunrise: string;
  sunriseCivil: string;
  sunriseNautical: string;
  sunriseAstronomical: string;
  sunset: string;
  sunsetCivil: string;
  sunsetNautical: string;
  sunsetAstronomical: string;
  temperatureMax: number;
  temperatureMin: number;
  daytimeForecast: DaytimeForecast;
  overnightForecast: OvernightForecast;
  restOfDayForecast?: RestOfDayForecast;
}

export interface DaytimeForecast {
  forecastStart: string;
  forecastEnd: string;
  cloudCover: number;
  conditionCode: string;
  humidity: number;
  precipitationAmount: number;
  precipitationChance: number;
  precipitationType: string;
  snowfallAmount: number;
  windDirection: number;
  windSpeed: number;
}

export interface OvernightForecast {
  forecastStart: string;
  forecastEnd: string;
  cloudCover: number;
  conditionCode: string;
  humidity: number;
  precipitationAmount: number;
  precipitationChance: number;
  precipitationType: string;
  snowfallAmount: number;
  windDirection: number;
  windSpeed: number;
}

export interface RestOfDayForecast {
  forecastStart: string;
  forecastEnd: string;
  cloudCover: number;
  conditionCode: string;
  humidity: number;
  precipitationAmount: number;
  precipitationChance: number;
  precipitationType: string;
  snowfallAmount: number;
  windDirection: number;
  windSpeed: number;
}

export interface ForecastHourly {
  name: string;
  metadata: Metadata3;
  hours: Hour[];
}

export interface Metadata3 {
  attributionURL: string;
  expireTime: string;
  latitude: number;
  longitude: number;
  readTime: string;
  reportedTime: string;
  units: string;
  version: number;
}

export interface Hour {
  forecastStart: string;
  cloudCover: number;
  conditionCode: string;
  daylight: boolean;
  humidity: number;
  precipitationAmount: number;
  precipitationIntensity: number;
  precipitationChance: number;
  precipitationType: string;
  pressure: number;
  pressureTrend: string;
  snowfallIntensity: number;
  snowfallAmount: number;
  temperature: number;
  temperatureApparent: number;
  temperatureDewPoint: number;
  uvIndex: number;
  visibility: number;
  windDirection: number;
  windGust: number;
  windSpeed: number;
}

export interface ForecastNextHour {
  name: string;
  metadata: Metadata4;
  summary: Summary[];
  forecastStart: string;
  forecastEnd: string;
  minutes: Minute[];
}

export interface Metadata4 {
  attributionURL: string;
  expireTime: string;
  language: string;
  latitude: number;
  longitude: number;
  providerName: string;
  readTime: string;
  units: string;
  version: number;
}

export interface Summary {
  startTime: string;
  condition: string;
  precipitationChance: number;
  precipitationIntensity: number;
}

export interface Minute {
  startTime: string;
  precipitationChance: number;
  precipitationIntensity: number;
}
