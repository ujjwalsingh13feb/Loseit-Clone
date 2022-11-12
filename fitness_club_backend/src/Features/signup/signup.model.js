const mongoose = require("mongoose");

const signupScheme = new mongoose.Schema({
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



// "email": "ashish@gmail.com",
// "password": "ashish123",
// "age": 24,
// "location": "wardha",
// "caloriesTotal": 2400,
// "id": 2



const Signups = mongoose.model("signup", signupScheme);

module.exports = Signups;