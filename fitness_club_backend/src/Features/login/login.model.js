const mongoose = require("mongoose");

const loginScheme = new mongoose.Schema({
    // id: Number,
    email: { type: String, require: true },
    password: { type: String, require: true },
    age: { type: Number, require: true },
    location: { type: String, require: true },
    caloriesTotal: { type: Number, require: true },
}, {
    timestamps: true,// give data 
    versionKey: false,//for __v:0
});




    // "email": "a@gmail.com",
    // "password": "a@gmail.com",
    // "age": "24",
    // "location": "maha",
    // "caloriesTotal": 2600.22,
    // "id": 7
  



const Logins = mongoose.model("login", loginScheme);

module.exports = Logins;