import React from "react";
import Spinner from "./Spinner";
import "./Card.css";

const Card = ({ loadingData, showData, weather, forecast }) => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;
  let url = "";
  let iconUrl = "";

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
  }

  return (
    <div id="contenedor">
      {showData === true ? (
        <div>
          
          <div id="tarjeta">
            <div id="caja1">
            <div className="fecha">{date}</div>
              <h2 id="ubicacion">{weather.name}</h2>
            </div>
            <div id="caja2">
              <h1 id="temperatura-valor">
                {(weather.main.temp - 273.15).toFixed(1)}°C
              </h1>
              <h1 id="temperatura-descripcion">
                {weather.weather[0].description}
              </h1>
              <img src={iconUrl} alt="" id="icono-animado" />
            </div>
            <div id="caja3">
              <h3>Speed</h3>
              <h1 id="viento-velocidad">{weather.wind.speed}M/S</h1>
            </div>
            <br />
          </div>
        </div>
      ) : (
        <h2 className="without-data">Without Data...</h2>
      )}
    </div>
  );
};

export default Card;
