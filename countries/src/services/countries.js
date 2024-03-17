import axios from 'axios'

const url = "https://studies.cs.helsinki.fi/restcountries/api"
const weatherAPIKey = ""

const urlAllCountries = url + "/all"
const urlCountry = url + "/name"

const getCountries = () => axios.get(`${urlAllCountries}`)
const getCountry = name => axios.get(`${urlCountry}/${name}`)
const getWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`
    return axios.get(url)
}

export default {getCountries, getCountry, getWeather}