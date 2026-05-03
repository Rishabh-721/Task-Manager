const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const { login } = require("../controller/user.controller");

router.post("/login", login);

router.get("/me", auth, (req, res) => {
  res.json({ user: req.user });
});


module.exports = router;