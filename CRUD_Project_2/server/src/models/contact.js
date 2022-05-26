const mongoose = require('mongoose')
const validator = require('validator')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "this email is already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("this email is not valid")
            }
        }
    },
    phone: {
        type: String,
        required: true
    }
})

const contact =  new mongoose.model('contact', contactSchema);

module.exports = contact;