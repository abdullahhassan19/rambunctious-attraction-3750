const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: String,
  price: Number,
  strikedPrice: Number,
  imageUrl: String,
  prodHighlights: String,
  longDesc: String,
  shortDesc: String,
  ratings: Number,
  numberOfRatings: String,
  discount: Number,
  brand: String,
  userId: String,
});

const ProductModel = mongoose.model("pharmaproducts", productSchema);

module.exports = { ProductModel };
