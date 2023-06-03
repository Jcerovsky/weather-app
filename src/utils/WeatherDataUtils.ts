import WeatherData from "../WeatherInterface";

export default function WeatherDataUtils(temperatureData: WeatherData) {
  if (temperatureData === null) {
    return {
      temp: "",
      temp_max: "",
      temp_min: "",
      city: "",
      icon: "",
      description: "",
      feels_like: "",
    };
  }

  const temp = temperatureData && `${temperatureData.main.temp.toFixed(1)}°`;
  const temp_max =
    temperatureData && `${temperatureData.main.temp_max.toFixed(1)}°`;
  const temp_min =
    temperatureData && `${temperatureData.main.temp_min.toFixed(1)}°`;
  const city = temperatureData && temperatureData.name;
  const icon = temperatureData && temperatureData.weather[0].icon;
  const description = temperatureData && temperatureData.weather[0].description;
  const feels_like = temperatureData?.main.feels_like?.toFixed(2);

  const timeZoneOffsetInSeconds = temperatureData?.timezone;

  return {
    temp,
    temp_min,
    temp_max,
    city,
    icon,
    description,
    feels_like,
    timeZoneOffsetInSeconds,
  };
}
