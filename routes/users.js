const router = require("express").Router();
const userService = require("../services/UserService");

router.get("/", (req, res) => {
  res.send("Users");
});

router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));

router.post("/login", (req, res) => {});

router.post("/register", async (req, res, next) => {
  try {
    const user = await userService.insert(req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
