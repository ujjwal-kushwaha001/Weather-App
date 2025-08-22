import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("ahmedabad");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind_speed, setWind_speed] = useState("");
  const inputRef = useRef("");

  const WeatherCall = async () => {
    const url = `https://cities-temperature.p.rapidapi.com/weather/v1/current?location=${location}`;
    const options = {
    	method: 'GET',
    	headers: {
    		'x-rapidapi-key': '14a6e1d80emsh1cc1de4bec03cecp1d68eajsn072e63b72959',
    		'x-rapidapi-host': 'cities-temperature.p.rapidapi.com'
    	}
    };

    try {
    	const response = await fetch(url, options);
    	const result = await response.json();
    	console.log(result);
      setTemp(result.temperature)
      setWind_speed(result.wind_speed)
      setHumidity(result.humidity)
      setDescription(result.description)
    } catch (error) {
    	console.error(error);
    }
  };

  WeatherCall();

  

  useEffect(() => {
    console.log("Location is changed: " + location);
  }, [location]);

  return (
    <>
      <Navbar inputRef={inputRef} setLocation={setLocation}/>
      <div className="container m-auto my-7  flex flex-col items-center min-h-[90vh] w-[100vw] bg-blue-200">
        
        <div className="weather-details flex flex-col  w-[100%] min-h-[75vh] bg-cyan-600">
          <div className="location flex  items-center h-[40px] gap-1 m-3">
            <i className="fa-solid fa-location-dot text-3xl"></i>
            <p className="text-3xl">{location}</p>
          </div>
          <div className="temparature min-h-[30vh] flex justify-center items-center text-7xl gap-3">
            <p className=" font-bold">{temp}</p>
            <i class="fa-solid fa-temperature-high"></i>
          </div>
          <div className="other-details flex justify-center gap-3 h-[20vh]">
            <div className="humidity flex flex-col items-center justify-center border-1 p-5 w-[30%]">
              <p className="text-2xl">humidity</p>
              <p className="text-5xl">{humidity}</p>
            </div>
            <div className="windSpeed flex flex-col items-center justify-center border-1 p-5 w-[30%]">
              <p className="text-2xl">Wind</p>
              <p className="text-5xl">{wind_speed}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
