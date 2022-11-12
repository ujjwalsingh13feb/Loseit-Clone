const mongoose = require("mongoose");

const snackScheme = new mongoose.Schema({
    // id: Number,
    foodId: { type: String, require: true },
    label: { type: String, require: true },
    Calories: { type: Number, require: true },
    Protein: { type: Number, require: true },
    Carbohydrates: { type: Number, require: true },
    Fat: { type: Number, require: true },
    Quantity: { type: Number, require: true },
}, {
    timestamps: true,// give data 
    versionKey: false,//for __v:0
});

// "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
// "label": "Apple",
// "Calories": 52,
// "Protein": 0.26,
// "Carbohydrates": 13.81,
// "Fat": 0.17,
// "Quantity": 1,
// "id": 1

const Snacks = mongoose.model("snack", snackScheme);

module.exports = Snacks;