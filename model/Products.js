const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  title: String,
  type: String,
  offer: String,
  price: String,
  image: Object,
});

const Products = mongoose.model("Products", ProductSchema);
exports.Products = Products;
