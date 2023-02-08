const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
var comment = [
    {
        id: 0,
        user: "John",
        text: "This is first comment"
    },
    {
        id: 1,
        user: "Carter",
        text: "This is second comment"
    },
    {
        id: 2,
        user: "Mishra",
        text: "This is third comment"
    }
]

app.get('/comments', (req, res) => {
    res.render('index', { comment });
})

app.get('/comments/new', (req, res) => {
    res.render('new');
})

app.get('/comments/:commentid', (req, res) => {
    console.log(req.params);
    res.send(comment[req.params['commentid']].user + "->" + comment[req.params['commentid']].text);
})

app.patch('/comments/:commentid',(req,res) => {
    console.log(req.params);
    console.log(comment[parseInt(req.params.commentid)]);
    comment[parseInt(req.params.commentid)].id = 
    comment[parseInt(req.params.commentid)].user = req.body.user;
    comment[parseInt(req.params.commentid)].text = req.body.Text;    
    res.render('index',{comment})  
})

app.get('/comments/:commentid/edit', (req, res) => {
    const curobj = comment[req.params['commentid']]
    res.render('edit', { curobj })
})

app.delete('/comments/:commentid',(req,res) => {
    console.log(req.params)
    console.log(parseInt(req.params.commentid));
    var id = parseInt(req.params.commentid);
    comment = comment.filter((x) => x.id != id);
    res.redirect('/comments')
})
app.post('/comments/', (req, res) => {
    console.log(req.body);
    let id = comment.length;
    var newObj = {
        id: id,
        user: req.body.user,
        text: req.body.Text
    }
    comment.push(newObj);
    res.redirect('/comments');
})

app.listen(3000, () => {
    console.log('server listen at port 3000');
})