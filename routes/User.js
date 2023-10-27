const express = require("express");
const { User } = require("../model/userDetails");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/add", async (req, res) => {
  const { userType, firstName, lastName, email, password } = req.body;
  const encryptPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json("User already exists");
    }
    await User.create({
      userType,
      firstName,
      lastName,
      email,
      password: encryptPassword,
    });
    res.send({ status: "ok", data: req.body });
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allDatas = await User.find();
    res.send({ status: "ok", data: allDatas });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
