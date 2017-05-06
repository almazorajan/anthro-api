"use strict";

module.exports = (str) => {
    if (typeof str === "string") {
        return str.replace(/\s+/g, " ").trim();
    }
    return "";
};