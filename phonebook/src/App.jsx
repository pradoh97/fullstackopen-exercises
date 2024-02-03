import { useState } from 'react'
import Phonebook from './components/Phonebook'

const App = () => {
  const [person, setPersons] = useState([
    {name: "Arto Hellas"}
  ])

  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        if(newName !== ''){
          setPersons(person.concat({name: newName}))
          setNewName('')
        } else {
          console.log("No name supplied")
        }
      }}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
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
