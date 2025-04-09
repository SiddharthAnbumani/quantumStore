const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => {
    console.log("CONNECTED TO MONGO");
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(cors());

app.post("/api/add-product", async (req, res) => {
  const productData = req.body;
  const addProduct = new Product(productData);
  await addProduct.save();
  console.log("Received data:", productData);
  res.status(200).json({ message: "Product added successfully" });
});

app.get("/api/fetch-edit-product/:productId", async (req, res) => {
  const { productId } = req.params;
  const foundProduct = await Product.findById(productId);
  res.status(200).json(foundProduct);
});

app.put("/api/edit-product/:productId", async (req, res) => {
  const { productId } = req.params;
  const newData = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(productId, newData, { new: true });
  console.log(updatedProduct);
  res.status(200).json({ message: "Product updated successfully" });
});

app.delete("/api/delete-product/:productId", async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(productId);
  console.log("Deleted:", deletedProduct);
  res.status(200).json({ message: "Product deleted." });
});

app.get("/api/all-products", async (req, res) => {
  const allProducts = await Product.find({});
  res.status(200).json(allProducts);
});

app.get("/api/all-products/:id", async (req, res) => {
  const { id } = req.params;
  const indData = await Product.findById(id);
  console.log(indData);
  res.status(200).json(indData);
});

app.listen(3000, () => {
  console.log("ON PORT 3000");
});


