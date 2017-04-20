"use strict";

const crypto = require("crypto");

module.exports = {
    HashPassword: HashPassword,
    Sha512: Sha512
};

function GenerateSalt(length) {
    return crypto
        .randomBytes(Math.ceil(length / 2))
        .toString("hex")
        .slice(0, length);
}

function Sha512(salt, password) {
    var hash = crypto.createHmac("sha512", salt);
    hash.update(password);
    return hash.digest("hex");
}

function HashPassword(password) {
    var salt = GenerateSalt(Math.ceil(Math.random() * 30) + 16);
    return {
        salt: salt,
        hashedPassword: Sha512(salt, password)
    };
}