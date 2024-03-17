//import countrieService from './services/countries'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import {useState, useEffect} from 'react'
import countriesService from './services/countries'

const App = () => {
  const [countryName, setCountryName] = useState("")
  const [countryList, setCountryList] = useState(null)

  const getCountries = () => {
    if(countryName){
      countriesService.getCountries()
      .then(response => {
        const countryMatches = response.data
        const countryList = countryMatches.filter(country => country.name.common.toLowerCase().includes(countryName))
        setCountryList(countryList)
      })
    }
  }

  useEffect(getCountries, [countryName])

  return(
    <>
      <Search countryName={countryName} setCountryName={setCountryName}/>
      {countryList ? <SearchResults countryList={countryList}/> : <p>Please start typing a country name to know more about it.</p> }
    </>
  )
}

export default App
