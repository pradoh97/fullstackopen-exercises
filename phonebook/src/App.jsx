import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import NewContact from './components/NewContact'
import phoneService from './services/phones'

const App = () => {
  const [contactList, setContacts] = useState([])
  const [displayList, setDisplayList] = useState(contactList)
  const [nameFilter, setNameFilter] = useState('')

  const getContacts = () => {
    phoneService.getAll()
      .then(response => {
        setContacts(response.data)
        filterByName(nameFilter, response.data)
      })
  }

  useEffect(getContacts, [])


  const deleteContact = ({id, name}) => {
    const deletionConfirmed = window.confirm(`Delete ${name} ?`)
    
    if(deletionConfirmed){
      phoneService.deleteContact(id, name)
        .then(response => {
          getContacts()
        })
    }
  }

  const filterByName = (filter = "", newPerson = contactList) => {
    const filteredList = newPerson.filter(contactList => contactList.name.toLowerCase().trim().includes(filter.toLowerCase().trim()))
    
    filter ? setDisplayList(filteredList) : setDisplayList(newPerson)
    setNameFilter(filter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} filterByName={filterByName}/>
      <NewContact contactList={contactList} setContacts={setContacts} nameFilter={nameFilter} filterByName={filterByName}/>
      <h2>Numbers</h2>
      <ol>
        {displayList.map( contactList => 
          <Contact key={contactList.name} name={contactList.name} number={contactList.number} deleteContact={ () => deleteContact(contactList)}/>
        )}
      </ol>
    </div>
  )
}

export default App
