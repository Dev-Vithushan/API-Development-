//Inserting the express into the express
require("dotenv").config();
const express = require('express');         

const App = express();

//mongoose connection
const connectDB = require("./connection");

//mongoose model
const userModel = require("./user");

//Configuration
App.use(express.json());


//route:    /
//Descrbtions:   To get all user
//Parameters:    none
App.get('/', async(req, res) => {
    const user = await userModel.find();
    return res.json({user});
});

//route:    /user/new
//Descrbtions:   To create new user
//Parameters:    none
//req body: user obj

App.post("/user/new", async(req, res) => {
    const {newUser} = req.body;

    await userModel.create(newUser);
    return res.json({messsage: "User Created"});
 });


//when server listen our port
App.listen(4000, () =>
    connectDB()
    .then((data) => console.log("hello world"))
    .catch((error) => console.log(error))    
);