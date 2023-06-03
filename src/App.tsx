import { useEffect, useRef, useState } from "react";
import WeatherData from "./WeatherInterface";
import "./App.css";
import WeatherDataUtils from "./utils/WeatherDataUtils";
import InputSection from "./components/InputSection";

const apiKey: string = import.meta.env.VITE_API_KEY as string;

export default function App() {
  const [searchCity, setSearchCity] = useState("Bratislava");
  const [temperatureData, setTemperatureData] = useState<WeatherData | null>(
    null
  );

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${apiKey}`;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getWeatherData();
  }, [searchCity]);

  async function getWeatherData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        setTemperatureData(data);
      } else {
        setTemperatureData(null);
      }
    } catch (err) {
      setTemperatureData(null);
      alert("City not found");
    }
  }

  const handleClick = () => {
    if (inputRef.current) {
      setSearchCity(inputRef.current.value);
    }
  };

  const { temp, temp_min, temp_max, city, icon, description, feels_like } =
    WeatherDataUtils(temperatureData!);

  const imgSrc = icon
    ? `https://openweathermap.org/img/w/${icon}.png`
    : "https://www.shutterstock.com/image-vector/404-error-page-funny-design-260nw-1761026456.jpg";

  return (
    <div className="main">
      <p className="weather-city">{city}</p>
      <div className="main-icon-temp-section">
        <>
          <img
            className="img weather-icon-img"
            src={imgSrc}
            alt="weather-icon"
          />
          <span className="weather-temp">{temp}</span>
        </>
        <div className="weather-info">
          <p className="weather-temp-max">Max {temp_max}</p>
          <p className="weather-temp-min">Min {temp_min}</p>
          <p className="weather-description">{description?.toUpperCase()}</p>
          <p className="weather-feels-like">Feels like {feels_like}°</p>
        </div>
      </div>
      <InputSection onClick={handleClick} forwardedRef={inputRef} />
    </div>
  );
}
