
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    enum: [
      "Buy Property",
      "Rent Property",
      "Sell Property",
      "Site Visit",
      "General Inquiry"
    ]
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
const ContactModel = mongoose.model('contacts', contactSchema)
module.exports = ContactModel
