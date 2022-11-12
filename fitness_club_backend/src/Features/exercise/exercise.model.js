const mongoose = require("mongoose");

const exerciseScheme = new mongoose.Schema({
    // id: Number,
    calories_per_min: { type: String, require: true },
    duration_minutes: { type: String, require: true },
    total_calories_per_min: { type: String, require: true },
    nameExercise: { type: String, require: true },
}, {
    timestamps: true,// give data 
    versionKey: false,//for __v:0
});



// "calories_per_min": "260.00",
// "duration_minutes": "50.00",
// "total_calories_per_min": "260.00",
// "nameExercise": "Golf, walking and pulling clubs",
// "id": 1



const Exercises = mongoose.model("exercise", exerciseScheme);

module.exports = Exercises;