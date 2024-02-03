const Phonebook = ({person}) => {
    return person.map( contact => <p key={contact.name}>{contact.name}</p>)
}

export default Phonebook