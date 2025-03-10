import {
  CityContainer,
  TemperatureContainer,
  WeatherCardWrapper,
  WeatherDataContainer,
  WeatherImageContainer,
} from "./styles"
import { useSelector } from "react-redux"
import { WeatherCardSelectors } from "store/redux/weatherCard/weatherCardSlice"

function WeatherCard() {
  const weatherData = useSelector(WeatherCardSelectors.weatherCards)

  if (!weatherData || weatherData.length === 0) return null

  const currentWeatherCard = weatherData[weatherData.length - 1]

  return (
    <WeatherCardWrapper key={currentWeatherCard.id}>
      <WeatherDataContainer>
      <TemperatureContainer>
          {currentWeatherCard.temperature}
        </TemperatureContainer>
        <CityContainer>{currentWeatherCard.city}</CityContainer>
      </WeatherDataContainer>
      <WeatherImageContainer>
        <img src={currentWeatherCard.weather_icon} alt="weather icon" />
      </WeatherImageContainer>
    </WeatherCardWrapper>
  )
}

export default WeatherCard
