import client from "./client"

export const getProductsApi = () => {
  return client.get('/products');
}

export const getProductBySlug = (slug) => {
  return client.get(`/products/${slug}`);
}
