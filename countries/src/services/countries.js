import axios from 'axios'

const url = "https://studies.cs.helsinki.fi/restcountries/api"
const weatherAPIKey = import.meta.env.VITE_WEATHER_KEY

const urlAllCountries = url + "/all"
const urlCountry = url + "/name"
const urlIcons = "https://openweathermap.org/img/wn"

const getCountries = () => axios.get(`${urlAllCountries}`)
const getCountry = name => axios.get(`${urlCountry}/${name}`)
const getWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`
    return axios.get(url)
}
const getWeatherIcon = name =>{
    console.log(name)
    const url =`${urlIcons}/${name}@2x.png`
    return axios.get(url)
}

export default {getCountries, getCountry, getWeather, getWeatherIcon}