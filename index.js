const config = require("./config/index");
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users");
const indexRouter = require("./routes/index");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./config/passport");
require("./mongo-connection");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));

// passport config
passportConfig(passport);

// express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_message = req.flash("success_message");
  res.locals.error_message = req.flash("error_message");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", indexRouter);
app.use("/users", userRouter);

app.listen(config.port, () => {
  console.log(`Express now listening on port ${config.port}`);
});
