"use strict";

const Promise = require("bluebird");
const express = require("express");
const router = express.Router();

router.use(require("../../middlewares/session-validator.middleware").ValidateSession);

require("./endpoints/get-all.endpoint")(router);
require("./endpoints/add.endpoint")(router);
require("./endpoints/update.endpoint")(router);
require("./endpoints/delete.endpoint")(router);

module.exports = router;
