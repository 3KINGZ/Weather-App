import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import WeatherCard from "./component/WeatherCard";
import "./App.css";

const state = ["lagos", "new york", "paris", "madrid", "london"];

function App() {
  const [search, setSearch] = useState(
    state[Math.floor(Math.random() * state.length)]
  );
  const [weathers, setWeathers] = useState();
  const [error, setError] = useState("");
  const input = useRef();

  const onSearchWeather = () => {
    setSearch(input.current.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${
          search ? search : "lagos"
        }&appid=e404b8ce090a29748e8a5bd734a45781`
      )
      .then((json) => {
        // Save the posts into state
        setWeathers(json.data);
        setError("");
      })
      .catch((error) => {
        setError("...oops an error occured while fetching data");
      });
  }, [search]);

  return (
    <div className="weather">
      <h1>Weather Forecast</h1>
      <input
        placeholder="Search city or state"
        ref={input}
        onKeyPress={(event) =>
          event.key === "Enter" ? onSearchWeather() : null
        }
      />
      {error ? (
        <h2>{error}</h2>
      ) : !weathers ? (
        <h2>Loading</h2>
      ) : (
        <div className="weather-card">
          {weathers.weather.map((weatherDesc) => (
            <WeatherCard
              cityName={weathers.name}
              country={weathers.sys.country}
              temp={weathers.main.temp}
              img={weatherDesc.icon}
              imgAlt={weatherDesc.icon}
              weather={weatherDesc.main}
              description={weatherDesc.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
