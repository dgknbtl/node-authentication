const { UserController } = require("../controllers");
const router = require("express").Router();
const passport = require("passport");

const { forwardAuthenticated } = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.send("Users");
});

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));
router.get("/register", forwardAuthenticated, (req, res) =>
  res.render("register")
);

router.post("/login", UserController.passportAuthenticate);

router.post("/register", UserController.createUser);

router.get("/logout", UserController.logout);

module.exports = router;
