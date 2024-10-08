import { useState } from 'react'
import phoneService from '../services/phones'

const NewContact = ({contactList, setContacts, nameFilter, filterByName, setNotificationMessage, setNotificationStyle}) => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
    
  const addContact = newContact => {
    
    const contactExists = contactList.filter(contact => (contact.name === newContact.name)).length
    
    let updateContact = false
    
    if(contactExists) updateContact = window.confirm(`${newContact.name} is already in your agenda, replace old number with new one?`)
    
    if(newContact.name !== '' && newContact.number !== ''){
      newContact.name = newContact.name.trim()
      let updatedContactList = contactList
      
      if(updateContact){
        updatedContactList = contactList.map(contact => contact.name === newContact.name ? newContact : contact)
        
        phoneService
          .updateContact(newContact)
          .then(response => {
            setContacts(updatedContactList)
            setNotificationMessage(`Updated ${newContact.name}'s phone number`)
            setNotificationStyle('success')
            setContacts(updatedContactList)
            filterByName(nameFilter, updatedContactList)
          })
      }
      if(!contactExists) {
        phoneService
          .addContact(newContact)
          .then(response =>{
            setNotificationMessage(`Added ${newContact.name} to your contacts`)
            setNotificationStyle('success')
            updatedContactList = contactList.concat(newContact)
            setContacts(updatedContactList)
            filterByName(nameFilter, updatedContactList)
          })

      }

      if(contactExists && updateContact || !contactExists){
        setNewName('')
        setNewPhone('')
        setContacts(updatedContactList)
        filterByName(nameFilter, updatedContactList)
      }

    } else {
        newContact.name ? console.log("Please provide a phone number") : console.log("please provide a name")
    }

    setTimeout(() => {
      setNotificationMessage("")
    }, 3000)
  }
  return(
    <>
    <h2>Add new contact</h2>
    <form onSubmit={(event) => {
      event.preventDefault()
      addContact({name: newName, number: newPhone})
    }}>
      <div>
        name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
      </div>
      <div>
        number: <input type="tel" value={newPhone} onChange={(event) => setNewPhone(event.target.value)}/>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
    </>
  )
}

export default NewContact