const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const model =require('../model/product');
const Product=model.Product;

// CREATE
exports.createProduct = async (req, res) => {
    const product= new Product(req.body);
    try{
      await product.save();
      res.status(201).json(product);
    }catch(err){
      res.status(400).json(err);
    }
};
// READ
exports.getAllProduct = async(req, res) => {
   const products = await Product.find({});
  res.json(products);
};
exports.getProduct =async (req, res) => {
  const id = req.params.id;
   const product = await Product.findById(id);
  res.json(product);
};
exports.ReplaceProduct =async (req, res) => {
  const id = req.params.id;
  try{
    const doc=await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.UpdateProduct =async (req, res) => {
  const id = req.params.id;
   try{
    const doc =await Product.findOneAndUpdate({_id:id},req.body,{new:true});
    res.status(201).json(doc);
   }catch(err){
    console.log(err);
    res.json(err);
   }
};
exports.DeleteProduct = async (req, res) => {
  const id = req.params.id;
try{
  const doc=await Product.findOneAndDelete({_id:id})
  res.status(201).json(doc);
}catch(err){
  res.status(400).json(err);
}
};
