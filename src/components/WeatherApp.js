import React, { useEffect, useState } from "react";
import "./css/style.css";

// useState, useEffect, fetchApi, Json

function WeatherApp() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Kolkata");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=61914744c3e4c88fb7978bd8dbe9e237`;
      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(resJson.main);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <h3 style={{ paddingLeft: "10px" }}>WeatherApp</h3>
      <div className="box">
        <div className="inputData">
          <input
            type="Search"
            className="inputFeild"
            placeholder="Enter your location"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="No_data_found">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <div>
                <h2 className="location">{search}</h2>
                <h1 className="temp">{city.temp}°C</h1>

                {/* <img
                  src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                /> */}
              </div>
              <h3 className="temp_min_max">
                Min : {city.temp_max}°C | Max : {city.temp_min}°C
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default WeatherApp;
