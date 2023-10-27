const mongoose = require("mongoose")

const cartProd = new mongoose.Schema(
    {
     price : String,
     title : String,
     offertype : String,
     image : String,
     offer : String,
     type : String,

    },
    {
        collection:"addToCart"
    }
)

const Cart = mongoose.model("addToCart",cartProd)
exports.Cart = Cart;