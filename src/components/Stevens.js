import React, { useState, useEffect } from "react";
import axios from "axios";

function Stevens() {
  const [data, setData] = useState({});

  // Stevens Pass coordinates
  let lat = 47.74;
  let long = -121.08;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=5f3235b4550bbecd181603f4bed2e2e0`;

  const getData = async () => {
    const response = await axios.get(url);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Stevens Pass</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()}°F</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="snow">
            <p className="bold">{data.snow ? data.snow["1h"] : 0}"</p>
            <p>Snow</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{data.wind.speed.toFixed()} MPH</p>
            ) : null}
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stevens;
