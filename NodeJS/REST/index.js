const express = require('express')
const app = express()
const path = require('path')
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}));
const comment = [
    {
        id:0,
        user: "John",
        text: "This is first comment"
    },
    {
        id:1,
        user: "Carter",
        text: "This is second comment"
    },
    {
        id:2,
        user: "Mishra",
        text: "This is third comment"
    }
]

app.get('/comments',(req,res) => {
    res.render('index',{comment});
})

app.post('/comments',(req,res) => {
    console.log(req.body);
    let id = comment.length;
    var newObj = {
        id: id,
        user: req.body.user,
        text: req.body.Text
    }
    comment.push(newObj);
    res.render('index',{comment});
})

app.listen(3000,() => {
    console.log('server listen at port 3000');
})