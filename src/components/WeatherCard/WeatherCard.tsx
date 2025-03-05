import { WeatherCardWrapper, WeatherImageContainer } from "./styles";
import { useSelector } from "react-redux";
import { WeatherCardSelectors } from "store/redux/weatherCard/weatherCardSlice";

function WeatherCard() {
  const weatherData = useSelector(WeatherCardSelectors.weatherCards);

  if (!weatherData || weatherData.length === 0) return null;

  const currentWeatherCard = weatherData[weatherData.length - 1];

  return (
    <WeatherCardWrapper key={currentWeatherCard.id}>
      <WeatherImageContainer>
        <img src={currentWeatherCard.weather_icon} alt="weather icon" />
      </WeatherImageContainer>
      <p>{currentWeatherCard.city}</p>
      <p>{currentWeatherCard.temperature}</p>
    </WeatherCardWrapper>
  );
}

export default WeatherCard;
