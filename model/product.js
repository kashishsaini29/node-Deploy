
const mongoose = require("mongoose");
const { Schema } = mongoose;


const productsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique:true
  },
  description: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    min: [0, "Not less than Zero"],
    max: 999,
  },
  discountPercentage: {
    type: Number,
    min: [10, "Not less than 10%"],
    max: [30, "Not more than 30%"],
  },
  rating:{
    type:Number,
    default:0
  },
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

exports.Product = mongoose.model("Product", productsSchema);