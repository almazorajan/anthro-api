"use strict";

const express = require("express");
const router = express.Router();

require("./endpoints/attempt-login.endpoint")(router);

module.exports = router;