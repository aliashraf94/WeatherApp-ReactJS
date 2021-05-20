import React from "react"
// import WeatherCard from "./WeatherCard"

const WeatherFetch = () => {

const APIkey = '6312c1c01f22491abd2c35e6001ee7fa';
const baseURL = 'https://api.weatherbit.io/v2.0/current?';
const latitude = 31.519747659036902
const longitude = 74.35291997121315
const fetchWithCords = () => {
    let URL = `${baseURL}lat=${latitude}&lon=${longitude}&key=${APIkey}`;
    let fetching = fetch(URL)
    fetching.then((response)=>response.json()).then((info)=> weatherObject(info.data[0]))
    fetching.catch((error)=> console.error('Something went wrong', error));
}

const weatherObject = (weatherInfo) => {
    console.log(weatherInfo); 
}

fetchWithCords()
    return(
        <div>
            
        </div>
    )
}

export default WeatherFetch