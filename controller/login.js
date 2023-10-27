const { User } = require("../model/userDetails");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcrypt");

const jwtcode = process.env.JWT_SECRET;

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ status: "error", error: "User not found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, jwtcode);
      return res.send({ status: "ok", data: token });
    }
  } catch (error) {
    res.json({ status: "error", error: "invalid password" });
  }
};

exports.UserData = async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, jwtcode, (err, res) => {
      if (err) {
        return "Token expires";
      }
      return res;
    });
    if (user == "Token expires") {
      return res.send({ status: "error", data: "Token expired" });
    }
    await User.findOne({ email: user.email }).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: "error", error: "invalid password" });
  }
};
