import WeatherCard from "components/WeatherCard/WeatherCard";
import { HistoryPageWrapper } from "./styles";
import WeatherCards from "components/WeatherCard/WeatherCards";

function HistoryPage() {
    return (
      <HistoryPageWrapper>
        <WeatherCards />
      </HistoryPageWrapper>
    );
  }
  
  export default HistoryPage;