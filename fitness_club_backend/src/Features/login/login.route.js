
const express = require("express");
const Logins = require("./login.model");

const app = express.Router();

app.get("/", async (req, res) => {
    let login = await Logins.find();
    res.send(login);
});

app.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let login = await Logins.findById(id);
        if (login) {
            res.send(login);
        } else {
            res.send("login not Found!");
        }
    } catch (error) {
        res.send("error:", error.message);
    }
});

app.post("/", async (req, res) => {
    try {
        let login = await Logins.create({
            ...req.body,
        });
        res.send(login);
    } catch (error) {
        // console.log('error:', error)
        res.status(404).send(error.message);
    }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let login = await Logins.findOneAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(login);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let login = await Logins.findByIdAndDelete(id);
        //deleteOne;
        if (login) {
            res.send("Logins Delete Successfully!");
        } else {
            res.send("Cannot Delete non-Existing Logins!");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/", async (req, res) => {
    let login = await Logins.find();
    res.send(login);
});

module.exports = app;
