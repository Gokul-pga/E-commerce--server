const express = require("express");
const router = express.Router();
const { login, UserData } = require("../controller/login");

router.post("/login-user", login);
router.post("/userData", UserData);

module.exports = router;
