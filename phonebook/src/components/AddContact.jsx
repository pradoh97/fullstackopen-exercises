import { useState } from 'react'

const AddContact = ({setPersons, filterByName, nameFilter, person}) => {
  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  function addContact(contact){
    let personExists = person.filter(person => (person.name == contact.name)).length

    if(personExists){
      window.alert(`${contact.name} is already in your agenda`)
    } else if(contact.name !== '' && contact.phone !== ''){
      const newContact = {name: contact.name.trim(), phone: contact.phone}
      setPersons(person.concat(newContact))
      setNewName('')
      setNewPhone('')
      filterByName(nameFilter, person.concat(newContact))
    } else {
      contact.name ? console.log("Please provide a phone number") : console.log("please provide a name")
    }
  }

  return(
    <>
    <h2>Add new contact</h2>
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
    </>
  )
}

export default AddContact