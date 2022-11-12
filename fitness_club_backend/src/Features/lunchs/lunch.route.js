
const express = require("express");
const Lunchs = require("./lunch.model");

const app = express.Router();

app.get("/", async (req, res) => {
    let lunch = await Lunchs.find();
    res.send(lunch);
});

app.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let lunch = await Lunchs.findById(id);
        if (lunch) {
            res.send(lunch);
        } else {
            res.send("lunch not Found!");
        }
    } catch (error) {
        res.send("error:", error.message);
    }
});

app.post("/", async (req, res) => {
    try {
        let lunch = await Lunchs.create({
            ...req.body,
        });
        res.send(lunch);
    } catch (error) {
        // console.log('error:', error)
        res.status(404).send(error.message);
    }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let lunch = await Lunchs.findOneAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(lunch);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let lunch = await Lunchs.findByIdAndDelete(id);
        //deleteOne;
        if (lunch) {
            res.send("Lunchs Delete Successfully!");
        } else {
            res.send("Cannot Delete non-Existing Lunchs!");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/", async (req, res) => {
    let lunch = await Lunchs.find();
    res.send(lunch);
});

module.exports = app;
