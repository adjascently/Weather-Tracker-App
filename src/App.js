import { useState } from 'react'
import styled from "styled-components";
import axios from "axios";

import Search from "./components/search";
import WeatherInfo from "./components/weather";




const Container = styled.div`
  display:flex;
  flex-direction:column;
  width: 550px;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555
  // padding: 20px 10px;
  // border-radius: 3px
`;

const Label = styled.span`
    color: black;
    margin: 10px auto;
    font-size: 22px;
    font-weight: bold
`; 


function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    setWeather(response.data)
  };

  return (
    <Container>
      <Label>Weather App</Label>
      {/* weather is set initially not set */}
      {weather ? (
        <WeatherInfo weather={weather} /> ) : ( 
        <Search setCity={setCity} fetchWeather={fetchWeather} /> 
      )}
    </Container>
  );
}

export default App;
