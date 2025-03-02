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
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    number: {
        type: String,
        validate: {
            validator: function(v){
                return /\d{2,3}-\d+/.test(v);
            }
        }
    }
})

phonebookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
      }
})

module.exports = mongoose.model('Person', phonebookSchema)