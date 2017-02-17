"use strict";

const BodyParser = require("body-parser");

module.exports = {
    UrlEncodedExtended: UrlEncodedExtended,
    Json: Json
}

function UrlEncodedExtended() {
    return BodyParser.urlencoded({ extended: false });
}

function Json() {
    return BodyParser.json();
}