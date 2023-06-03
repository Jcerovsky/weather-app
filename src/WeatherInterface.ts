export default interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  };
  clouds: {
    all: number;
  };
  rain: {
    "1h": number;
  };

  timezone: number;
  precipitation: {
    value: number;
    mode: string;
  };
  visibility: number;
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
  name: string;
}
