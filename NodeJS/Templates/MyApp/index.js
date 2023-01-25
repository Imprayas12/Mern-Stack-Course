const express = require('express')
const app = express()
app.set('view engine','ejs');

app.listen(3000,() => {
    console.log("Port running")
})


app.get('/home',(req,res) => {
    res.render('index')
})