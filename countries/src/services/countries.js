import axios from 'axios'

const getCountries = () => axios.get(`${urlAllCountries}`)
const getCountry = name => axios.get(`${urlCountry}/${name}`)

const url = "https://studies.cs.helsinki.fi/restcountries/api"
const urlAllCountries = url + "/all"
const urlCountry = url + "/name"
export default {getCountries, getCountry}