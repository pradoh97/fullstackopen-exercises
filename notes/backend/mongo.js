const mongoose = require('mongoose')

const db = { username: '', password: '', name: '' }
db.username = process.argv[2]
db.password = process.argv[3]
db.name = 'noteApp'

const url = `mongodb+srv://${db.username}:${db.password}@cluster0.cxela.mongodb.net/${db.name}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: 'CSS is hard.',
//     important: true,
// })

// note.save().then(result => {
//     console.log(note, "saved.")

//     mongoose.connection.close()
// })
Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})