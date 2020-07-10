import config from '../config/config';

export default {
  getForecast: `https://samples.openweathermap.org/data/2.5/forecast/daily?id=${config.forecastId}&appid=${config.forecastAPIKey}`,
};
