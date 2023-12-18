var express = require("express");
var fs = require('fs');
var url = require('url')
var app = express();
const PORT = 5000;


app.get('/test/:id', function(req, res){
    fs.readFile('test.html', 'utf8', (err,data) =>{
        if (err){
            return res.statusCode(404);
        }
        else{
            let result = data.replace('<title>', `<title> ${req.params.id}  - ` )
            return res.end(result);
        }
    })
    
})
app.listen(PORT, () => {
    console.log(`Server has started on port = ${PORT}`);
})

app.get('/greet', (req, res) =>{
    res.send('Hello there, how are you?');
})
app.get('/message', (req, res) =>{
    res.send('this is a message');
})
app.get('/intro', (req, res) =>{
    res.send('Hello my name is Adarsh Singh');
})
app.get('/greet/:name', (req, res) =>{
    console.log(req.params);
    res.send("Hello " + req.params.name + ", how are you?");
})


// body parser and node persist (POST request)

const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();

app.get('/student/:id', async(req,res) => {
    return res.send(await storage.getItem(req.params.id));
})

app.post('/student', jsonParser, async(req,res) =>{
    const {student_id, student_name} = req.body;
    await storage.setItem(student_id, student_name);
    res.send("Student added!");
})


//coding problem 31 - to add 2 nos from the parameter

app.get('/add', (req,res) => {
    let urlParse = url.parse(req.url, true)
    num1 = parseInt(urlParse.query.num1);
    num2 = parseInt(urlParse.query.num2);
    sum = parseInt(urlParse.query.num1) + parseInt(urlParse.query.num2);

    return res.send(`${num1} + ${num2} = ${sum}`);
})
