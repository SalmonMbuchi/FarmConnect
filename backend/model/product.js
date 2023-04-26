const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  originalPrice: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  category: {
    type: String,
    required: [true, "Please enter your product category!"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
  },
  images: [
    {
      type: String,
    },
  ],
  discountPrice: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  soldOut: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
