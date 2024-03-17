const Search = ({countryName, setCountryName}) => {
    return (
        <>
        <label htmlFor="country-search">Find countries</label>
        <input onChange={(e) => setCountryName(e.target.value)} value={countryName} id="country-search" type="text" placeholder="Country name"/>
        </>
    )
}

export default Search