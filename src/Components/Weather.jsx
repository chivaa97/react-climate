import React, { useState } from "react";
import Form from "./Form";
import "./Weather.css";
import Card from "./Card";

const Weather = () => {
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=b05aff22d745ee234ed8b6397b248fda&lang=en
  `;
  let cityUrl = "&q=";
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=b05aff22d745ee234ed8b6397b248fda&lang=en";
  // let url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=b05aff22d745ee234ed8b6397b248fda`;
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [,setLocation] = useState("");
  const getLocation = async(loc) => {
    setLoading(true);
    setLocation(loc);

    //weather

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather).then((response)=>{
      // eslint-disable-next-line no-throw-literal
      if(!response.ok) throw {response}
      return response.json();
    }).then((weatherData)=>{
      console.log(weatherData);
      setWeather(weatherData);
    }).catch(error=>{
      console.log(error);
      setLoading(false);
      setShow(false);
    })

    //Forecast
    urlForecast = urlForecast + cityUrl + loc;
    await fetch(urlForecast).then((response)=>{
      // eslint-disable-next-line no-throw-literal
      if(!response.ok) throw {response}
      return response.json();
    }).then((forecastData)=>{
      console.log(forecastData);
      setForecast(forecastData);
      setLoading(false);
      setShow(true);
    }).catch(error=>{
      console.log(error);
      setLoading(false);
      setShow(false);
    })

  };

  return (
    <>
    <br />
    <Form
      newLocation={getLocation} 
    />
    <Card 
      showData = {show}
      loadingData = {loading}
      weather = {weather}
      forecast = {forecast}
      />
    </>
  );
};

export default Weather;
