const express = require("express");
const {
  addProducts,
  getProducts,
  deleteProducts,
} = require("../controller/products");
const router = express.Router();

router.post("/upload", addProducts);
router.get("/get", getProducts);
router.delete("/:id", deleteProducts);
// router.put("/:id", updateProducts);

module.exports = router;
