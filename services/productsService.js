const createError = require('../helpers/createError');
const validateName = require('../helpers/validateName');
const productsModel = require('../models/productsModel');

async function getAllProducts() {
  const products = await productsModel.getAllProducts();
  return products;
}

async function getProductById(id) {
  const product = await productsModel.getProductById(id);
  if (!product) return createError('notFound', 'Product not found');
  return product;
}

async function addProduct(name) {
  const { error } = validateName(name);
  if (error) return { error };

  const product = await productsModel.addProduct(name);
  return product;
}

module.exports = { getAllProducts, getProductById, addProduct };
