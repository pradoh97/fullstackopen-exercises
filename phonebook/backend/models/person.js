const mongoose = require("mongoose")
require("dotenv").config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.ATLAS_URL)
    .then(result => {
        console.log("Connected to MongoDB")
    })
    .catch(error => {
        console.log(`Failed to connect: ${error}`)
    })

const phonebookSchema = mongoose.Schema({
    name: String,
    number: String
})

phonebookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
      }
})

module.exports = mongoose.model('Person', phonebookSchema)