"use trict";

const Db = require("../../../database");

module.exports = new Db.Schema({
    number: {
        type: String,
        trim: true
    }
});