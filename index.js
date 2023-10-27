const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
const User = require("./routes/User.js");
const login = require("./routes/login.js");
const products = require("./routes/products.js");
const cartProduct = require("./routes/cartProduct.js");

dotenv.config();

//Connect to server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Srever Started");
});

// connect to mongodb
const MONGO = process.env.MONGODB;
mongoose.connect(MONGO).then(console.log("Databast Connected"));

app.use("/jwt", User);
app.use("/jwt", login);
app.use("/api", products);
app.use("/cart", cartProduct);
