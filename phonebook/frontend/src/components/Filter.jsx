const Filter = ({nameFilter, filterByName}) => {
  
  return(
    <>
    filter: <input type="text" value={nameFilter} onChange={(event) => filterByName(event.target.value)}/>
    </>
  )
}
export default Filter