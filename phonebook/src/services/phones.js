import axios from 'axios'

const url = 'http://dev-hernan-test.duckdns.org:3001/persons'

const deleteContact = id => axios.delete(`${url}/${id}`)

const getAll = () => axios.get(url)

const addContact = newContact => axios.post(url, {id: newContact.name, ...newContact})

const updateContact = (updatedContact) => axios.put(`${url}/${updatedContact.name}`, updatedContact)

export default{ getAll, addContact, deleteContact, updateContact}