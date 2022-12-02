const Product = require("./product.model");

const findById = async (id) => {

  return await Product.findById(id);

};

const find = async () => {

  return await Product.find();

};

const deleteById = async () => {
    
  return await Product.deleteById();

};

const save = async (productData) => {

const product = await new Product(productData);

return await product.save();

};

// const saveMany = async(product)


module.exports = { findById, find, save, deleteById };