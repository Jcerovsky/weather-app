import WeatherData from "../WeatherInterface";

export default function getSunTime(
  temperatureData: WeatherData | null,
  time: number
) {
  //This function gets timezone number in seconds, converts it to ms
  //then it get a UNIX sunrise time in seconds, converts it to ms
  //then it creates a new instance of time with adjusted timezone, as the sunrise
  //would be otherwise calculated from the browser's location.
  //Finally, it returns time with hours and minutes format

  const timezoneInMs = temperatureData && -temperatureData.timezone * 1000;
  const sunTime = temperatureData && time;
  const adjustedSunTimestamp = sunTime && timezoneInMs ? sunTime : null;
  const adjustedSunDate =
    adjustedSunTimestamp && new Date(adjustedSunTimestamp);
  const sunHour = adjustedSunDate && adjustedSunDate.getHours();
  const sunMinutes = adjustedSunDate && adjustedSunDate.getMinutes();

  return sunMinutes && `${sunHour}:${sunMinutes < 10 ? "0" : ""}${sunMinutes}`;
}
