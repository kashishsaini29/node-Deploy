const express = require("express");

const ProductController = require("../controller/product");

const router = express.Router();

//  Create POST /products    C R U D
router
  .post("/", ProductController.createProduct)

  // READ GET /product
  .get("/", ProductController.getAllProduct)

  // READ GET /product/:id
  .get("/:id", ProductController.getProduct)

  // Update PUT /products/:id
  .put("/:id", ProductController.ReplaceProduct)

  // Update PATCH /products/:id
  .patch("/:id", ProductController.UpdateProduct)

  // Delete DELETE /products/:id
  .delete("/:id", ProductController.DeleteProduct);

exports.routes = router;
