//Import 
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connect = require("./Config/db");
const breakfastRoute = require("./Features/breakfasts/breakfast.route");
const dinnerRoute = require("./Features/dinners/dinner.route");
const lunchRoute = require("./Features/lunchs/lunch.route");
const snackRoute = require("./Features/snacks/snack.route");
const exerciseRoute = require("./Features/exercise/exercise.route");
const loginRoute = require("./Features/login/login.route");
const signupRoute = require("./Features/signup/signup.route");
const commentsRoute = require("./Features/comments/comment.route");

//port
const PORT = process.env.PORT;

//connect
const app = express();
app.use(express.json());
app.use(cors());
app.use("/breakfast", breakfastRoute);
app.use("/dinner", dinnerRoute);
app.use("/lunch", lunchRoute);
app.use("/snack", snackRoute);
app.use("/exercise", exerciseRoute);
app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.use("/comments", commentsRoute);

//listen
app.listen(PORT, async () => {
    try {
        await connect();
    } catch (error) {
        console.log('error:', error)

    }
    console.log(`Listening on http://localhost:${PORT}`);
})