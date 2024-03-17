const SearchResults = ({countryList}) => {

    if(countryList.length > 10) return(<p>Too many matches, try adding more letters for the country name.</p>)

    if(countryList.length == 1) {
        const country = countryList[0]
        return (
            <>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>

            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flag} />
            </>
        )
    }
    return(
        countryList.map(country => <p key={country.name.common}>{country.name.common}</p>)
    )
}

export default SearchResults