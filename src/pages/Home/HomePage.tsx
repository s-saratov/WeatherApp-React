import { HomePageWrapper, InputWrapper, ResultContainer } from "./styles"
import Button from "components/Button/Button"
import Input from "components/Input/Input"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import WeatherCard from "components/WeatherCard/WeatherCard"
import {
  fetchWeather,
  WeatherCardSelectors,
} from "store/redux/weatherCard/weatherCardSlice"
import { AppDispatch } from "store/store"
import Spinner from "components/Spinner/Spinner"
import Error from "components/Error/Error"

function HomePage() {
  const dispatch = useDispatch<AppDispatch>()
  const [city, setCity] = useState("")
  const [error, setError] = useState<string | null>(null)
  const status = useSelector(WeatherCardSelectors.status)
  const apiError = useSelector(WeatherCardSelectors.error)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
    setError(null)
  }

  const handleSearch = () => {
    if (!city.trim()) {
      setError("Enter city name")
      return
    }
    dispatch(fetchWeather(city))
    setCity("")
  }

  return (
    <HomePageWrapper>
      <InputWrapper>
        <Input
          name="city"
          id="city"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          error={error}
        />
        <Button name="Search" onClick={handleSearch} />
      </InputWrapper>
      <ResultContainer>
        {status === "loading" ? (
          <Spinner />
        ) : apiError ? (
          <Error message={apiError} />
        ) : (
          <WeatherCard />
        )}
      </ResultContainer>
    </HomePageWrapper>
  )
}

export default HomePage
