var express = require('express')
var app = express()
app.use(express.static('public'))
app.get('/home',(req,res)=>{
    console.log(__dirname)
res.sendFile(__dirname + '/home.html')

})

app.listen(5000,()=>{
    console.log('5000 port is running')
})