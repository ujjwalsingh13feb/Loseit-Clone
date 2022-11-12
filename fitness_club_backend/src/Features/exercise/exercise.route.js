
const express = require("express");
const Exercises = require("./exercise.model");

const app = express.Router();

app.get("/", async (req, res) => {
    let exercise = await Exercises.find();
    res.send(exercise);
});

app.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let exercise = await Exercises.findById(id);
        if (exercise) {
            res.send(exercise);
        } else {
            res.send("exercise not Found!");
        }
    } catch (error) {
        res.send("error:", error.message);
    }
});

app.post("/", async (req, res) => {
    try {
        let exercise = await Exercises.create({
            ...req.body,
        });
        res.send(exercise);
    } catch (error) {
        // console.log('error:', error)
        res.status(404).send(error.message);
    }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let exercise = await Exercises.findOneAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(exercise);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let exercise = await Exercises.findByIdAndDelete(id);
        //deleteOne;
        if (exercise) {
            res.send("Exercises Delete Successfully!");
        } else {
            res.send("Cannot Delete non-Existing Exercises!");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/", async (req, res) => {
    let exercise = await Exercises.find();
    res.send(exercise);
});

module.exports = app;
