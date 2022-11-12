const mongoose = require("mongoose");

const commentScheme = new mongoose.Schema({
    // id: Number,
    name: { type: String, require: true },
    url: { type: String, require: true },
    personname: { type: String, require: true },
}, {
    timestamps: true,// give data 
    versionKey: false,//for __v:0
});


    // "name": "ggg",
    // "url": "https://github.com/Anmoljagota/Anmoljagota.github.io/blob/master/src/utilits/anmol3-removebg-preview%20crop.jpg?raw=true",
    // "personname": "Anmol jagota",
    // "id": 3


const Comments = mongoose.model("comment", commentScheme);

module.exports = Comments;