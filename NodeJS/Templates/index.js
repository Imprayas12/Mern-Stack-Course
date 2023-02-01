const express = require('express')
const app = express()
const path = require("path")
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'views')))
app.set(path.join(__dirname,'partials'));
const todos = [
    "football",
    "coding karna",
    "bimar padna"
]

app.get('/todos',(req,res) => {
    res.render('todos',{todos});
})
app.get('/home',(req,res) => {
    const randomNumber = Math.floor(Math.random() * 10);
    res.render('index',{randomNumber});
})
app.listen(3000,() => {
    console.log("Port running")
})