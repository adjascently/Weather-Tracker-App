import styled from "styled-components";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;

const ChooseCityLable = styled.span`
  color: black;
  font-size: 22px;
  font-weight: bold;
  margin: 10px auto;
`;
const SercheBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 2px;
  colors: black;
  margin: 18px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    outline: none;
  }
  & button {
    color: white;
    background-color: black;
    padding: 6px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
  }
  & button:hover {
    background-color: gray;
    transition: all 0.2s;
  }
`;

const Serche = ({ setCity, fetchWeather }) => {
  return (
    <>
      <WeatherLogo src="/icons/day.svg" />
      <ChooseCityLable>Find Weather of your city</ChooseCityLable>
      <SercheBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          name="city"
        ></input>
        
        <button type="submit">Search</button>
      </SercheBox>
    </>
  );
};

export default Serche;
