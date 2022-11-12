
const express = require("express");
const Dinners = require("./dinner.model");

const app = express.Router();

app.get("/", async (req, res) => {
    let dinner = await Dinners.find();
    res.send(dinner);
});

app.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let dinner = await Dinners.findById(id);
        if (dinner) {
            res.send(dinner);
        } else {
            res.send("dinner not Found!");
        }
    } catch (error) {
        res.send("error:", error.message);
    }
});

app.post("/", async (req, res) => {
    try {
        let dinner = await Dinners.create({
            ...req.body,
        });
        res.send(dinner);
    } catch (error) {
        // console.log('error:', error)
        res.status(404).send(error.message);
    }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let dinner = await Dinners.findOneAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(dinner);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let dinner = await Dinners.findByIdAndDelete(id);
        //deleteOne;
        if (dinner) {
            res.send("Dinners Delete Successfully!");
        } else {
            res.send("Cannot Delete non-Existing Dinners!");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/", async (req, res) => {
    let dinner = await Dinners.find();
    res.send(dinner);
});

module.exports = app;
