import styled from "@emotion/styled"

export const WeatherCardWrapper = styled.div`
  width: 710px;
  height: 180px;
  background: linear-gradient(133.66deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
  backdrop-filter: blur(4px);
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const WeatherDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding: 0px;
  `

export const TemperatureContainer = styled.div`
  font-family: Inter, Lato, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  font-size: 57px;
  color: rgba(255, 255, 255, 1);
`

export const CityContainer = styled.div`
  font-family: Inter, Lato, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0%;
`

export const WeatherImageContainer = styled.div`
`
