import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//action
import { fetchWeather } from "./actions/fetchWeather";
import weatherInfo from "./reducers/weatherReducer";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody
} from "reactstrap";

import "./App.css";

function App() {
  //set city
  const [city, setCity] = useState("");

  const weatherSelector = useSelector(state => state);

  const dispatch = useDispatch();
  const getWeatherInfoAction = city => dispatch(fetchWeather(city));

  useEffect(() => {
    getWeatherInfoAction("baku");
  }, []);

  const getWeatherInfo = e => {
    e.preventDefault();

    if (city === "") {
      console.log("no city to search for");
    } else {
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherInfo);
    }
  };

  let details = "";
  if (
    weatherSelector.weatherInfo &&
    weatherSelector.weatherInfo.hasOwnProperty("location")
  ) {
    details = (
      <Card >
        <CardBody>
            <img className='center' src={weatherSelector.weatherInfo.current.weather_icons}></img>
          <ListGroup>
            <ListGroupItem>
              {weatherSelector.weatherInfo.location.name}
            </ListGroupItem>
            <ListGroupItem>
              {weatherSelector.weatherInfo.location.country}
            </ListGroupItem>
            <ListGroupItem>
              {weatherSelector.weatherInfo.current.observation_time}
            </ListGroupItem>
            <ListGroupItem>
              {weatherSelector.weatherInfo.current.temperature}°C
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  } else {
    details = <p>You need to type a city or the city you typed doesnt exist</p>;
  }

  return (
    <React.Fragment>
      <Container className="themed-container" className='App'>

        <Form inline onSubmit={getWeatherInfo}>
          <FormGroup>
            <Input type="text" name="name" placeholder="enter city name"  onChange={e => setCity(e.target.value)}/>
          <Button type="submit" color='info' value="Check Weather">Search</Button>
          </FormGroup>{" "}
        </Form>
          {details}
      </Container>
    </React.Fragment>
  );
}

export default App;
