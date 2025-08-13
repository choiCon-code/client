import client from "./client"

export const getAdminProducts = () => {
  return client.get('/admin/products');
}

export const createProduct = ({ title, category, description, images, price, salePrice }) => {
  return client.post('/admin/products', { title, category, description, images, price, salePrice });
}

export const getAdminCategories = () => {
  return client.get('/admin/categories');
}

export const createCategory = ({ name, banner }) => {
  return client.post('/admin/categories', { name, banner });
}