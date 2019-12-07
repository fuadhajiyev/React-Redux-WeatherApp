// API Access Key
//Limited Request
const key = "aecde0be21c74ef9def746b7d2dcfd2c";


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
