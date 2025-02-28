const mongoose = require('mongoose')
mongoose.Collection

if (process.argv.length < 4){
    console.log('give password as argument')
    process.exit(1)
}

const db = {
    username: process.argv[2],
    password: process.argv[3],
    name: "phonebook",
}

const url = `mongodb+srv://${db.username}:${db.password}@cluster0.cxela.mongodb.net/${db.name}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
    id: String
})

const Phonebook = new mongoose.model("Phonebook", phonebookSchema)

const new_contact = {
    id: process.argv[4] ? process.argv[4] : "",
    name: process.argv[4] ? process.argv[4] : "",
    number: process.argv[5] ? process.argv[5] : "",
}

if (new_contact.name && new_contact.number){
    const phone = new Phonebook(new_contact)
    phone.save().then(result => {
        console.log(`Added ${phone} to the phonebook.`)
        mongoose.connection.close()
    })
} else {
    Phonebook.find({}).then(result => {
        result.forEach(contact => {
            console.log(contact)
        })
        mongoose.connection.close()
    })
}