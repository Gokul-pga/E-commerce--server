const express = require("express");
const { Cart } = require("../model/CartProducts");

exports.cartProduct = async (req, res) => {
  const { price, type, title, offertype, image, offer } = req.body;
  try {
    await Cart.create({
      price,
      type,
      title,
      offertype,
      image,
      offer,
    });
    res.send({ status: "added", data: req.body });
  } catch (error) {
    console.log(error);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const allDatas = await Cart.find({});
    res.send({ status: "ok", data: allDatas });
  } catch (error) {
    console.log(error,"get error");
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const id = req.param.id;
    const alldata = await Cart.findById(id);
    await Cart.deleteOne(alldata);
    res.send({ status: "Deleted" });
  } catch (error) {
    console.log(error);
  }
};
