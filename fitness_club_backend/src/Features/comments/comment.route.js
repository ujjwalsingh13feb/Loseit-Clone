
const express = require("express");
const Comments = require("./comment.model");

const app = express.Router();

app.get("/", async (req, res) => {
    let comment = await Comments.find();
    res.send(comment);
});

app.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let comment = await Comments.findById(id);
        if (comment) {
            res.send(comment);
        } else {
            res.send("comment not Found!");
        }
    } catch (error) {
        res.send("error:", error.message);
    }
});

app.post("/", async (req, res) => {
    try {
        let comment = await Comments.create({
            ...req.body,
        });
        res.send(comment);
    } catch (error) {
        // console.log('error:', error)
        res.status(404).send(error.message);
    }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let comment = await Comments.findOneAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(comment);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let comment = await Comments.findByIdAndDelete(id);
        //deleteOne;
        if (comment) {
            res.send("Comments Delete Successfully!");
        } else {
            res.send("Cannot Delete non-Existing Comments!");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/", async (req, res) => {
    let comment = await Comments.find();
    res.send(comment);
});

module.exports = app;
