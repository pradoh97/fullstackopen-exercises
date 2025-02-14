const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

const generateId = () =>{
  let newId = Math.max(...persons.map(person => person.id)) + 1
  return newId
}

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
app.get('/api/persons', (req, res) => {
    res.json(persons)
})
app.get('/info', (req, res) => {
    let reccords = persons.length
    let timestamp = new Date()
    let response = `Phonebook has ${reccords} ${reccords == 1 ? "reccord" : "reccords"} stored.<br>Requested on ${timestamp}`
    res.send(response)
})
app.get("/api/persons/:id", (req, res) => {
  let id = req.params.id
  let person = persons.find( person => person.id == id)
  
  if (person) {
    res.json(person)
  } else {
    res.send("<h1>The peep you are trying to find is not available :( try another</h1>")
  }
})
app.delete("/api/persons/:id", (req, res) => {
  let id = req.params.id
  persons = persons.filter( person => person.id != id)
  res.status(204).end()
})
app.post('/api/persons',(req,res) => {
  let name = req.body.name
  let number = req.body.number

  if (!name){
    res.statusMessage = `Please specify a name for the contact.`
    return res.status(400).end()
  }

  if (!number){
    res.statusMessage=`Please specify a number for the contact.`
    return res.status(400).end()
  }

  let nameExists = persons.find(person => person.name == name)
  
  if (nameExists){
    res.statusMessage=`${name} already is a contact in your agenda.`
    return res.status(400).end()
  }

  let newPerson = {
    "id": String(generateId()),
    "name": name,
    "number": number
  }

  persons = persons.concat(newPerson)
  res.status(204).end()
})
app.get('*', (req, res)=> {
    res.send("<h1> You are here but <a href='/api/persons'>/api/persons</a> seems like a more interesting endpoing. </h1>")
})

const PORT = 3001
app.listen(PORT)