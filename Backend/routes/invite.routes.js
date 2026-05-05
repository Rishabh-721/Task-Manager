const express = require("express");
const router = express.Router();
const { createInvite } = require("../controller/invite.controller");
const auth = require("../middleware/auth.middleware");



router.post("/create", auth, createInvite);

module.exports = router;