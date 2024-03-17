import countriesService from '../services/countries.js'

const toggleCountryInfo = (country) => {
    const countryElement = document.getElementById(country.name.common).querySelectorAll('div')[0]
    countryElement.style.display === "none" ? countryElement.style.display = "initial" : countryElement.style.display = "none"
}

const SearchResult = ({hidden=false, country}) => {

    countriesService.getWeather(
        country.latlng[0], country.latlng[1]
    )
    .then(response => console.log((response.data.main.temp - 273.5).toFixed(2)))

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