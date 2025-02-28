const Note = require("./models/note")
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const errorHandler = (error, request, response, next) => {
    console.log(error.message)
    
    if(error.name === "CastError"){
        return response.status(400).send({ error: "malformatted id"})
    }

    next(error)
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: "Unknown endpoint"})
}

app.get("/", (request, response) =>{
    response.send("<h1>Hello World!</h1>")
})

app.get("/api/notes", (request, response) =>{
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

app.get("/api/notes/:id", (request, response, next) =>{
    const id = request.params.id

    Note.findById(id).then(note => {
        if (note) {
            response.json(note)
        } else {
            response.status(404).end()
        }
    })
    .catch(error => { next(error) })
})

app.delete('/api/notes/:id', (request, response) =>{
    const id = request.params.id
    Note.findByIdAndDelete(id)
        .then( result => {
            response.status(204).end()
        })
        .catch( error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
    const body = request.body
    const id = request.params.id
    
    const note = {
        content: body.content,
        important: body.important,
    }

    Note.findByIdAndUpdate(id, note, { new: true})
        .then(updatedNote => {
            response.json(updatedNote)
        })
        .catch(error => next(error))
})

app.post('/api/notes', (req, res) => {
    const body = req.body

    if (!body.content) {
        res.statusMessage = "Request content is missing."
        return res.status(400)
    }
    
    const note = new Note({
        content: body.content,
        important: Boolean(body.important) || false
    })

    note.save().then(savedNote => {
        res.json(savedNote)
    })
})

app.use(requestLogger)
app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
