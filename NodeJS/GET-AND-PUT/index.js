const express = require('express')
const app = express()
const path = require('path')
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.render('index')
})
app.get('/user',(req,res) => {
    res.send('Get request recieved')
})

app.post('/user',(req,res) => {
    console.log(req.body);
    res.send('post request recieved');
})

app.listen(5000,() => {
    console.log('server listen at port 5000');
})