import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { weatherData, weatherSliceState } from "./types"
import { v4 as uuidv4 } from "uuid"

const apiKey = "2ae2adfffc8ebc37abd62fe2b222ef39"

export const fetchWeather = createAsyncThunk<
  weatherData,
  string,
  { rejectValue: string }
>("weather/fetchWeather", async (city, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    const data = response.data

    return {
      id: uuidv4(),
      city: data.name,
      temperature: `${data.main.temp}°`,
      weather_icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Unknown error while fetching data";
      
    return rejectWithValue(errorMessage);
  }
});

const weatherInitialState: weatherSliceState = {
  weatherCards: [],
  status: "default",
  error: null,
}

export const weatherCardSlice = createSlice({
  name: "weather",
  initialState: weatherInitialState,
  reducers: {
    deleteAllExceptLast: state => {
      if (state.weatherCards.length > 1) {
        state.weatherCards = [state.weatherCards[state.weatherCards.length - 1]]
      }
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.status = "loading"
        state.error = null
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<weatherData>) => {
          state.status = "success"
          state.weatherCards.push(action.payload)
        },
      )
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "error"
        state.error = action.payload || "Error while fetching data"
      })
  },
})

export const WeatherCardActions = {
  fetchWeather,
  deleteAllExceptLast: weatherCardSlice.actions.deleteAllExceptLast,

}

export const WeatherCardSelectors = {
  weatherCards: (state: { weather: weatherSliceState }) =>
    state.weather.weatherCards,
  status: (state: { weather: weatherSliceState }) => state.weather.status,
  error: (state: { weather: weatherSliceState }) => state.weather.error,
}

export default weatherCardSlice.reducer
