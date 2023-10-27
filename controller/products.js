const { Products } = require("../model/Products");
const cloudinary = require("../utils/cloudinary");
const express = require("express");

exports.addProducts = async (req, res) => {
  const { title, type, offer, price, image } = req.body;
  try {
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image, {
        upload_preset: "products",
      });
      if (uploadResponse) {
        const products = new Products({
          title,
          type,
          offer,
          price,
          image: uploadResponse,
        });
        const savedProducts = await products.save();
        res.send({ status: "added", data: savedProducts });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//get method
exports.getProducts = async (req, res) => {
  try {
    const allDatas = await Products.find({});
    res.send({ status: "ok", data: allDatas });
  } catch (error) {
    console.log(error);
  }
};

//delete method
exports.deleteProducts = async (req, res) => {
  try {
    const id = req.param.id;
    const prod = await Products.findById(id);
    await Products.deleteOne(prod);
    res.send({ status: "Deleted" });
  } catch (error) {
    console.log(error);
  }
};

//update Method
// exports.updateProducts = async(req,res) => {
//   try {
//     const id = req.param.id
//     const prod = await Products.findById(id);
//     const updateProd = req.body;
//     await Products.updateOne(prod, updateProd);
//     res.send({status:"ok",data:req.body})
//   } catch (error) {
//     console.log(error);
//   }
// }
