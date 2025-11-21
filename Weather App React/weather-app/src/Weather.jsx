import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {
  const [city,setCity] = useState()
  const[weather,setWeather] = useState()
  const handleCityChange =()=>{
    setCity(event.target.value)
  }

  const fetchWeather = async()=>{
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'53cb73e1f1023674c870a0a2d70adde4'}`)
       setWeather(response)
    }
    catch(error){
        console.log("Error Fetching----",error)
    }
  }

  const handleClick=()=>{
    fetchWeather()
  }
  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter City' value={city} onChange={handleCityChange}/>

        <button onClick={handleClick}>Get Weather</button>
        {weather  && <>
        <div className='weather-info'>
          <h3>{weather.data.name}</h3>
          <p>Temp is {weather.data.main.temp}</p>
          <p>{weather.data.weather[0].description}</p>
        </div>
        </>}
    </div>
  )
}

export default Weather