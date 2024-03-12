import axios from 'axios'
const url = 'http://dev-hernan-test.duckdns.org:3001/persons'

const getAll = () => axios.get(url)

const addContact = newContact => axios.post(url, newContact)

export default{ getAll, addContact }