import Button from "components/Button/Button"
import { WeatherCardWrapper, WeatherImageContainer } from "./styles"
import { useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  WeatherCardSelectors,
  WeatherCardActions,
} from "store/redux/weatherCard/weatherCardSlice"

function WeatherCards() {
  const dispatch = useAppDispatch()
  const weatherData = useAppSelector(WeatherCardSelectors.weatherCards)

  const previousWeatherCards = weatherData.slice(0, -1)

  const handleDeleteAll = () => {
    dispatch(WeatherCardActions.deleteAllExceptLast())
  }

  if (!weatherData || weatherData.length === 0) return null

  return (
    <>
      {previousWeatherCards.length > 0 && (
        <>
          {previousWeatherCards.map(weatherCard => (
            <WeatherCardWrapper key={weatherCard.id}>
              <WeatherImageContainer>
                <img src={weatherCard.weather_icon} alt="weather icon" />
              </WeatherImageContainer>
              <p>{weatherCard.city}</p>
              <p>{weatherCard.temperature}</p>
            </WeatherCardWrapper>
          ))}
          <Button name="Delete all cards" onClick={handleDeleteAll} />
        </>
      )}
    </>
  )
}

export default WeatherCards
