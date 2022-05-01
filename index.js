const config = require("./config/index");
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users");
const indexRouter = require("./routes/index");
require("./mongo-connection");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/users", userRouter);

app.listen(config.port, () => {
  console.log(`Express now listening on port ${config.port}`);
});
