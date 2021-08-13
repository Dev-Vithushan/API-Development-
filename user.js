//Importing the Mongoose from momgoose module
const mongoose = require("mongoose");

//Creating user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    userType: String,

});


const userModel = mongoose.model("User",userSchema);

module.exports = userModel;
