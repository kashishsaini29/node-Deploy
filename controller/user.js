const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const path =require('path');
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../data.json"), "utf-8"));
const users = data.users;

exports.createProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
};
exports.getAllProduct = (req, res) => {
  res.json(users);
};
exports.getProduct = (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const product = users.find((p) => p.id === +id);
  res.json(product);
};
exports.ReplaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  users.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
exports.UpdateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
exports.DeleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  users.splice(productIndex, 1);
  res.json();
};
