var express = require('express')
var mongoose = require('mongoose')
var cors  =require('cors')
var app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
const EstateModel = require('./models/EstateModel')
const ContactModel  =require('./models/ContactModel')

mongoose.connect("mongodb://127.0.0.1:27017/estate")
  .then(() => console.log("DB connected"))
  

app.post('/appo', (req, res) => {
  EstateModel.create(req.body)
    .then((estate) => res.json(estate))
})


app.post('/contact', (req, res) => {
  ContactModel.create(req.body)
    .then((contact) => res.json(contact))
    .catch((err) => res.status(500).json({ error: err.message }))
})
app.use("/api/service", require("./routes/ServiceRoutes"));
app.listen(5000, () => {
  console.log("port 5000 running ....")
})
