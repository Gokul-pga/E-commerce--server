const express = require("express");
const {
  cartProduct,
  getProducts,
  deleteCart,
} = require("../controller/cartProduct");
const router = express.Router();

router.post("/post", cartProduct);
router.get("/get", getProducts);
router.delete("/:id", deleteCart);

module.exports = router;
