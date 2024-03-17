import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import NewContact from './components/NewContact'
import phoneService from './services/phones'
import Notification from './components/Notification'

const App = () => {
  const [contactList, setContacts] = useState([])
  const [displayList, setDisplayList] = useState(contactList)
  const [nameFilter, setNameFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState()
  const [notificationStyle, setNotificationStyle] = useState()
  const getContacts = () => {
    phoneService.getAll()
      .then(response => {
        setContacts(response.data)
        filterByName(nameFilter, response.data)
      })
  }

  useEffect(getContacts, [])

  const deleteContact = ({name}) => {
    const deletionConfirmed = window.confirm(`Delete ${name} ?`)
    
    if(deletionConfirmed){
      phoneService.deleteContact(name)
        .then(response => {
          getContacts()
        })
        .catch(error => {
          setNotificationMessage(`${name} was already deleted!`)
          setNotificationStyle("error")
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
      <Notification style={notificationStyle} message={notificationMessage} />
      <Filter nameFilter={nameFilter} filterByName={filterByName}/>
      <NewContact contactList={contactList} setContacts={setContacts} nameFilter={nameFilter} filterByName={filterByName} setNotificationMessage={setNotificationMessage} setNotificationStyle={setNotificationStyle}/>
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
