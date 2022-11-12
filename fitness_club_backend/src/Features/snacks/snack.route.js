
const express = require("express");
const Snacks = require("./snack.model");

const app = express.Router();

app.get("/", async (req, res) => {
    let snack = await Snacks.find();
    res.send(snack);
});

app.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let snack = await Snacks.findById(id);
        if (snack) {
            res.send(snack);
        } else {
            res.send("snack not Found!");
        }
    } catch (error) {
        res.send("error:", error.message);
    }
});

app.post("/", async (req, res) => {
    try {
        let snack = await Snacks.create({
            ...req.body,
        });
        res.send(snack);
    } catch (error) {
        // console.log('error:', error)
        res.status(404).send(error.message);
    }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let snack = await Snacks.findOneAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(snack);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let snack = await Snacks.findByIdAndDelete(id);
        //deleteOne;
        if (snack) {
            res.send("Snacks Delete Successfully!");
        } else {
            res.send("Cannot Delete non-Existing Snacks!");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/", async (req, res) => {
    let snack = await Snacks.find();
    res.send(snack);
});

module.exports = app;
