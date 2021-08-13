//Inserting the express into the express
require("dotenv").config();
const express = require('express');         

const App = express();

//mongoose connection
const connectDB = require("./connection");

App.get('/', (req, res) => {
    return res.json({message:"success"});
});

//post method 
App.post("/user/:id", (req, res) => {
    return res.json(req.params)
 });




//when server listen our port
App.listen(4000, () =>
    connectDB()
    .then((data) => console.log("hello world"))
    .catch((error) => console.log(error))    
);