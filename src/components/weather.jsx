import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "./icons/temp.svg",
  sunrise: "./icons/temp.svg",
  humidity: "./icons/humidity.svg",
  wind: "./icons/wind.svg",
  pressure: "./icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "13d": "/icons/snow.svg",
  "13n": "/icons/snow.svg",
  "50d": "/icons/mist.svg",
  "50n": "/icons/mist.svg",
};

const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 25px auto;
  flex-direction: row;
  align-items: center;
`;

const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 10px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 80%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 10px 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = ({name, value}) => {
    return (
      <InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name]} />
        <InfoLabel>
          {value}
          <span>{name}</span>
        </InfoLabel>
      </InfoContainer>
    );
}

const Weather = ({weather}) => {
    console.log(weather);
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return (
            `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
        )
    }

  return (
    <>
      <WeatherContainer>
        <Condition>
          <span>{weather?.main?.temp} °C</span>
          {` | ${weather?.weather[0]?.description} `}
        </Condition>
        <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} />
      </WeatherContainer>

      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>

      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent name="wind" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="humidity" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  );
};

export default Weather;
