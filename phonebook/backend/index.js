const express = require("express")
const cors = require("cors")
const app = express()
let persons = [
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": "Ada Lovelace"
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": "Dan Abramov"
    },
    {
        "id": "Mary Poppendieck",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

const unknownEndpoint = (req, res) =>{
    res.status(404).send({error: "Unknown endpoint"})
}

app.get("/api/persons", (req, res) => {
    if (persons){
        res.json(persons)
    } else {
        res.statusMessage("No contacts available.")
        res.status(404).end
    }
})

app.delete("/api/persons/:name", (req, res) => {
    let target_person = req.params.name
    if (target_person){
        persons = persons.filter( person => target_person != person.name)
        res.status(204).end()
    }
})

app.post("/api/persons", (req, res) => {
    let new_person = {}
    new_person.name = req.body.name
    new_person.number = req.body.number
    new_person.id = req.body.id

    if (!new_person){
        res.statusMessage = "Request content is missing."
    }
    if (!new_person.id){
        res.statusMessage = "Please, add the person's ID."
    }
    if (!new_person.name){
        res.statusMessage = "Please, add the person's name."
    }
    if (!new_person.number){
        res.statusMessage = "Please, add the person's number."
    }

    if (res.statusMessage){
        return res.status(400)
    } else {
        persons = persons.concat(new_person)
        res.json(persons)
    }


})

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})