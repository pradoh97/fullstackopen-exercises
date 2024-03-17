import axios from 'axios'

const getCountries = () => axios.get(`${urlAllCountries}`)

const url = "https://studies.cs.helsinki.fi/restcountries/api"
const urlAllCountries = url + "/all"
export default {getCountries}