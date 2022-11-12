
const express = require("express");
const Signups = require("./signup.model");

const app = express.Router();

app.get("/", async (req, res) => {
    let signup = await Signups.find();
    res.send(signup);
});

app.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let signup = await Signups.findById(id);
        if (signup) {
            res.send(signup);
        } else {
            res.send("signup not Found!");
        }
    } catch (error) {
        res.send("error:", error.message);
    }
});

app.post("/", async (req, res) => {
    try {
        let signup = await Signups.create({
            ...req.body,
        });
        res.send(signup);
    } catch (error) {
        // console.log('error:', error)
        res.status(404).send(error.message);
    }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let signup = await Signups.findOneAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(signup);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let signup = await Signups.findByIdAndDelete(id);
        //deleteOne;
        if (signup) {
            res.send("Signups Delete Successfully!");
        } else {
            res.send("Cannot Delete non-Existing Signups!");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/", async (req, res) => {
    let signup = await Signups.find();
    res.send(signup);
});

module.exports = app;
