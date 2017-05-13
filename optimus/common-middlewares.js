"use strict";

module.exports = (router) => {
    router.use(require("./middlewares/session-validator.middleware").ValidateSession);
};