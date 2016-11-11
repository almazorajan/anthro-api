
"use strict";

// module declarations
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// npm middlewares
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// defined middlwares
app.use((req, res, next) => {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();

}); // cors.

// routes
app.use("/module", require("./controllers/module.controller.js"));
app.use("/position", require("./controllers/position.controller.js"));
app.use("/user", require("./controllers/user.controller.js"));
app.use("/employmentstatus", require("./controllers/employment-status.controller.js"));

// api configurations
const apiConfig = {
    port: 8090,
    name: "Optimus"
};

app.listen(apiConfig.port, () => {

    console.log(apiConfig.name + " is listening to port " + apiConfig.port);

});

