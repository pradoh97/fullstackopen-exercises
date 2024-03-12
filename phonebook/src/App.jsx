import axios from 'axios'
import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import Filter from './components/Filter'
import AddContact from './components/AddContact'
import phoneService from './services/phones'

const App = () => {
  const [person, setPersons] = useState([])

  const hook = () => {
    phoneService.getAll()
      .then(response => {
        setPersons(response.data)
        setDisplayList(response.data)
      })
  }

  useEffect(hook, [])

  const [displayList, setDisplayList] = useState(person)
  
  const [nameFilter, setNameFilter] = useState('')

  function filterByName(filter, newPerson = person){
    const filteredList = newPerson.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()))
    
    filter ? setDisplayList(filteredList) : setDisplayList(newPerson)
    setNameFilter(filter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} filterByName={filterByName}/>
      <AddContact filterByName={filterByName} nameFilter={nameFilter} person={person} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Phonebook person={displayList}/>
    </div>
  )
}

export default App
