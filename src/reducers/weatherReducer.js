const weatherInfo = (
  state = {
    weatherInfo: {}
  },
  action
) => {
  //check action type
  if ((action.type = "FETCH_WEATHER")) {
    state = { ...state, weatherInfo: action.payload };
  }
  return state;
};

export default weatherInfo;
