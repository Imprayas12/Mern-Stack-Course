const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, "public", "JS")))

mongoose.connect('mongodb://localhost:27017/moviesd')
.then(() => console.log("Data base connected")).catch((err) => console.log('error occured'))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/search',(req,res) => {
    res.send('You are on search route')
})

app.listen(5000,() => {
    console.log('server running')
})