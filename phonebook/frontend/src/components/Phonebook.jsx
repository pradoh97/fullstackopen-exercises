import phoneService from '../services/phones'

const Phonebook = ({person}) => {
    return person.map( contact => <p key={contact.id}>
    {contact.name} {contact.number}
    <button onClick={() => phoneService.deletePerson(contact.id)}>Delete</button>
    </p>)
}

export default Phonebook