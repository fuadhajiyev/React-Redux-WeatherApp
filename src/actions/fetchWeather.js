// API Access Key
//Limited Request
const key = "6604021094c889c855c47d77dc8396f4";


export function fetchWeather(city) {
  return function(dispatch) {
    fetch(`http://api.weatherstack.com/current?access_key=${key}&query=${city}`)
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        //dispatch action
        dispatch({ type: "FETCH_WEATHER", payload: JSONres });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
