import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import Contact from './components/Contact'
import Filter from './components/Filter'
import AddContact from './components/AddContact'
import phoneService from './services/phones'

const App = () => {
  const [person, setPersons] = useState([])

  const getContacts = () => {
    phoneService.getAll()
      .then(response => {
        setPersons(response.data)
        setDisplayList(response.data)
      })
  }

  useEffect(getContacts, [])

  const [displayList, setDisplayList] = useState(person)
  
  const [nameFilter, setNameFilter] = useState('')

  const deleteContact = ({id, name}) => {
    const deletionConfirmed = window.confirm(`Delete ${name} ?`)
    
    if(deletionConfirmed){
      phoneService.deleteContact(id, name)
        .then(response => {
          getContacts()
        })
    }
  }

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
      <ol>
        {displayList.map( contact => 
          <Contact key={contact.id} name={contact.name} number={contact.number} deleteContact={ () => deleteContact(contact)}/>
        )}
      </ol>
    </div>
  )
}

export default App
