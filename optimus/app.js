"use strict";

const app = require("express")();
const config = require("./config");

require("./middlewares")(app);
require("./routes")(app);

app.listen(config.port, () => console.log(`${config.name} is listening to ${config.port}`));