import { combineReducers } from "redux";
import { weatherInfo } from "./weatherReducer";

//combine reducers
const reducers = combineReducers({
  WeatherInfo: weatherInfo,
  AnotherReducer
});

export default reducers;
