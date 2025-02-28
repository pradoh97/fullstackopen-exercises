const Person = require('./models/person')
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

const unknownEndpoint = (req, res) =>{
    res.status(404).send({error: "Unknown endpoint"})
}

const errorHandler = (error, req, res, next) => {
    console.log(error.message)

    if(error.name == "CastError"){
        return res.status(400).send({error: "Malformatted ID"})
    }
}

app.get("/api/persons", (req, res) => {
    Person.find({})
    .then( persons => res.json(persons))
    .catch( error => next(error))
})

app.get("/api/person/:name", (req, res) => {
    Person.find({name: req.params.name})
        .then( person => res.json(person))
})

app.delete("/api/persons/:name", (req, res) => {
    let targetPersonName = req.params.name
    console.log(targetPersonName)
    Person.find({name: targetPersonName})
    .then(personFound => {
        personFound.id = personFound[0]._id.toString()
        Person.findByIdAndDelete(personFound.id)
        .then( result => res.status(204).json(result))
    })
    .catch(error => next(error))
})

app.post("/api/persons", (req, res, next) => {
    let newPerson = {}
    newPerson.name = req.body.name
    newPerson.number = req.body.number

    if (!newPerson){
        res.statusMessage = "Request content is missing."
    }
    if (!newPerson.name){
        res.statusMessage = "Please, add the person's name."
    }
    if (!newPerson.number){
        res.statusMessage = "Please, add the person's number."
    }

    if (res.statusMessage){
        return res.status(400).end()
    }
    
    Person.find({name: newPerson.name})
        .then(foundPerson => {
            if(foundPerson.length){
                foundPerson.id = foundPerson[0]._id.toString()
                Person.findByIdAndUpdate(foundPerson.id, newPerson, {new: true})
                .then(result => res.json(result))
                .catch(error => next(error))

            } else {
                const person = new Person(newPerson)
                
                person.save()
                    .then( savedPerson => res.json(`New person created ${savedPerson}`))
                    .catch(error => next(error))
            }
        })
        .catch(error => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})