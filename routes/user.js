const express = require("express");

const UserController = require("../controller/user");

const router = express.Router();

//  Create POST /products    C R U D
router
  .post("/", UserController.createProduct)

  // READ GET /product
  .get("/", UserController.getAllProduct)

  // READ GET /product/:id
  .get("/:id", UserController.getProduct)

  // Update PUT /products/:id
  .put("/:id", UserController.ReplaceProduct)

  // Update PATCH /products/:id
  .patch("/:id", UserController.UpdateProduct)

  // Delete DELETE /products/:id
  .delete("/:id", UserController.DeleteProduct);

exports.routes = router;
