const { UserService } = require("../services");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Users");
});

router.get("/login", (req, res) => res.render("login"));

router.get("/register", (req, res) => res.render("register"));

router.post("/login", async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await UserService.findBy("email", email);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!(email && password && password && password2)) {
      res.render("register", { msg: "All input is required!" });
    }

    const user = await UserService.insert(req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
