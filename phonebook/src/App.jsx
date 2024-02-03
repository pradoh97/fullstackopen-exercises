import { useState } from 'react'
import Phonebook from './components/Phonebook'

const App = () => {
  const [person, setPersons] = useState([
    {
      name: "Arto Hellas",
      phone: "+51795465"
    }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  
  function addContact(contact){
    let personExists = person.filter(person => (person.name == contact.name)).length

    if(personExists){
      window.alert(`${contact.name} is already in your agenda`)
    } else if(contact.name !== '' && contact.phone !== ''){
      setPersons(person.concat({name: contact.name.trim(), phone: contact.phone}))
      setNewName('')
      setNewPhone('')
    } else {
      contact.name ? console.log("Please provide a phone number") : console.log("please provide a name")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        addContact({name: newName, phone: newPhone})
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
      <h2>Numbers</h2>
      <Phonebook person={person}/>
    </div>
  )
}

export default App
