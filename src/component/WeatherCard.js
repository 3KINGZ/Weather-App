import React from "react";
import { Icon } from "@blueprintjs/core";
import "./WeatherCard.css";

function WeatherCard({
  cityName,
  country,
  temp,
  img,
  imgAlt,
  weather,
  description,
}) {
  const date = new Date();

  return (
    <>
      <div className="main-weather">
        <div className="city">
          <span>
            <span className="search-text">{cityName}</span>,
            <span>{country}</span>
          </span>
        </div>
        <div className="temperature">
          {Math.floor(temp - 273.15)}{" "}
          <sup>
            <Icon icon="circle" iconSize={11} color="white" /> C
          </sup>
        </div>
        <img src={`http://openweathermap.org/img/w/${img}.png`} alt={imgAlt} />
      </div>
      <div className="date">
        <div className="weather-text">
          <span>
            <span className="title">weather</span>:{" "}
            <span className="main-main-weather">{weather}</span>{" "}
            <span className="title">description</span>:{" "}
            <span className="main-description">{description}</span>{" "}
          </span>
        </div>
        <div>{String(date)}</div>
      </div>
    </>
  );
}

export default WeatherCard;
