var express = require("express");
var url = require("url");
var mysql = require("mysql");
var app = express();
var fs = require("fs");
const PORT = 5000;

// MySQL practice
const conn = mysql.createConnection({  //Creating connection to MySQL
  host: "localhost",
  user: "root",
  password: "",
  database: 'students'
});

conn.connect(function(err){
  if (err) {
    throw err;
  }
  console.log("Connected!");
});

// conn.query(`insert into student
//             values ('104', 'Shrey Gupta', 23, 8.7)`, (err, res, fields) => {
//               if(err){
//                 console.log(err);
//               }
//               console.log(res);
//             })

conn.query('select * from student', (err, res, fields) => {
  if(err) {
    console.log(err);
  }
  console.log(res);
})






// var cors = require('cors'); // Front end client can make request for resources to an external server -- Full form of CORS is - Cross-Origin Resource Sharing.
// app.use(cors());

// app.get("/test/:id", function (req, res) {
//   fs.readFile("test.html", "utf8", (err, data) => {
//     if (err) {
//       return res.statusCode(404);
//     } else {
//       let result = data.replace("<title>", `<title> ${req.params.id}  - `);
//       return res.end(result);
//     }
//   });
// });
// app.listen(PORT, () => {
//   console.log(`Server has started on port = ${PORT}`);
// });

// app.get("/greet", (req, res) => {
//   res.send("Hello there, how are you?");
// });
// app.get("/message", (req, res) => {
//   res.send("this is a message");
// });
// app.get("/intro", (req, res) => {
//   res.send("Hello my name is Adarsh Singh");
// });
// app.get("/greet/:name", (req, res) => {
//   console.log(req.params);
//   res.send("Hello " + req.params.name + ", how are you?");
// });

// body parser and node persist (POST request)

const storage = require("node-persist"); // Temporary storage
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json(); // Parser which parse the JSON Objects.
storage.init(); // Storage initialized

//Below code is to get student details based on their Student ID - Uncomment the below code to test and run
// app.get('/student/:id', async(req,res) => {
//     return res.send(await storage.getItem(req.params.id));
// })

// app.post('/student', jsonParser, async(req,res) =>{
//     const {student_id, student_name} = req.body;
//     await storage.setItem(student_id, student_name);
//     res.send("Student added!");
// })

// coding problem 31 - to add 2 nos from the parameter

// app.get("/add", (req, res) => {
//   let urlParse = url.parse(req.url, true);
//   num1 = parseInt(urlParse.query.num1);
//   num2 = parseInt(urlParse.query.num2);
//   sum = parseInt(urlParse.query.num1) + parseInt(urlParse.query.num2);

//   return res.send(`${num1} + ${num2} = ${sum}`);
// });

var cors = require("cors");
app.use(cors());

app.get("/student", async (req, res) => {
  res.send(await storage.values());
});

app.post("/student", jsonParser, async (req, res) => {
  const { student_id, student_name } = req.body;
  await storage.setItem(student_id, student_name);
  res.send("Student added successfully!!");
});
app.listen(PORT, () => {
  console.log(`Server has started on post: ${PORT}`);
});
