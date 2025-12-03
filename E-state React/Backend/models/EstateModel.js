const mongoose = require('mongoose')
const estateSchema = new mongoose.Schema({
    name : String,
    email : String,
    message : String
})

const esateModel = mongoose.model("estate",estateSchema)
module.exports = esateModel