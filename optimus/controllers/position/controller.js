"use strict";

const express = require("express");
const router = express.Router();
const Result = require("../classes/result");
const Employee = require("../models/employee/employee.model");
const Position = require("../models/position/position");

router.use(require("../middlewares/session-validator.middleware").ValidateSession);

require("./endpoints/get-all.endpoint")(router);
require("./endpoints/add.endpoint")(router);
require("./endpoints/update.endpoint")(router);
require("./endpoints/delete.endpoint")(router);

module.exports = router;