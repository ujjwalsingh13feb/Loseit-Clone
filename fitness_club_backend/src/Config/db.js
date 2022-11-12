const mongoose = require("mongoose");

const connect = async (req, res) => {
    return mongoose.connect(process.env.DB_URL);
}

module.exports = connect;