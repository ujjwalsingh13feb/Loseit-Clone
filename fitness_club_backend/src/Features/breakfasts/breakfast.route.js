
const express = require("express");
const Breakfasts = require("./breakfast.model");

const app = express.Router();

app.get("/", async (req, res) => {
    let breakfasts = await Breakfasts.find();
    res.send(breakfasts);
});

app.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let breakfast = await Breakfasts.findById(id);
        if (breakfast) {
            res.send(breakfast);
        } else {
            res.send("breakfast not Found!");
        }
    } catch (error) {
        res.send("error:", error.message);
    }
});

app.post("/", async (req, res) => {
    try {
        let breakfasts = await Breakfasts.create({
            ...req.body,
        });
        res.send(breakfasts);
    } catch (error) {
        // console.log('error:', error)
        res.status(404).send(error.message);
    }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let breakfasts = await Breakfasts.findOneAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(breakfasts);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let breakfasts = await Breakfasts.findByIdAndDelete(id);
        //deleteOne;
        if (breakfasts) {
            res.send("breakfasts Delete Successfully!");
        } else {
            res.send("Cannot Delete non-Existing breakfasts!");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/", async (req, res) => {
    let breakfasts = await Breakfasts.find();
    res.send(breakfasts);
});

module.exports = app;
