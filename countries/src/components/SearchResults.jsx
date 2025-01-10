import countries from '../services/countries.js'
import countriesService from '../services/countries.js'
import {useEffect, useState} from 'react'

const toggleCountryInfo = (country) => {
    const countryElement = document.getElementById(country.name.common).querySelectorAll('div')[0]
    const toggleButton = countryElement.parentNode.querySelector("button")
    if(countryElement.style.display === "none") {
        toggleButton.innerText = "Hide"
        countryElement.style.display = "initial"
    } else {
        toggleButton.innerText = "Show"
        countryElement.style.display = "none"
    }
    
}

const SearchResult = ({hidden=false, country}) => {
    const [temperature, setTemperature] = useState(null)
    const [wind, setWind] = useState(null)
    const [iconName, setIconName] = useState()
    const [icon, setIcon] = useState(null)

    countriesService.getWeather(
        country.latlng[0], country.latlng[1]
    )
    .then(response => {
        const temperature = (response.data.main.temp - 273.15).toFixed(2)
        setTemperature(temperature)
        const wind = (response.data.wind.speed)
        setWind(wind)
        setIconName(response.data.weather[0].icon)
    })
    
    const getWeatherIcon = () =>{
        countriesService.getWeatherIcon(iconName)
        .then(response => {
            const icon = response.config.url
            setIcon(icon)
        })
    }
    useEffect(getWeatherIcon, [iconName])



    const hiddenStyle = {
        display: "none"
    }
    return(
        <div style={hidden ? hiddenStyle : {}}>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>

            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flag} />
            <p>Icon name: {iconName}</p>
            <img src={icon} />
            <p>Temperature: {temperature}°C</p>
            <p>Wind: {wind} m/s</p>
        </div>
    )
}
const SearchResults = ({countryList}) => {

    if(countryList.length > 10) return(<p>Ugh, there are too many countries called like that    , try adding more letters for the country name.</p>)

    if(countryList.length == 1) {
        const country = countryList[0]
        return (<SearchResult country={country} />)
    }
    
    return(
        countryList.map(country => {
        return (
            <div key={country.name.common} id={country.name.common}>
            <p key={country.name.common + " - p"}>{country.name.common}</p>
            <button key={country.name.common + " - toggle button"} onClick={() => toggleCountryInfo(country)}>Show</button>
            <SearchResult hidden={true} key={country.name.common + " - toggle"} country={country} />
            </div>
        )
        })  
    )  
}

export default SearchResults