const Phonebook = ({person}) => {
    return person.map( contact => <p key={contact.name}>{contact.name} {contact.phone}</p>)
}

export default Phonebook