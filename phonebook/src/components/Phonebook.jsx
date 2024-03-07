const Phonebook = ({person}) => {
    return person.map( contact => <p key={contact.name}>{contact.name} {contact.number}</p>)
}

export default Phonebook