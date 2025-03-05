export interface weatherData {
  id: string
  city: string
  temperature: string
  weather_icon: string
}

export interface weatherSliceState {
  weatherCards: weatherData[];
  status: "default" | "loading" | "success" | "error";
  error: string | null;
}