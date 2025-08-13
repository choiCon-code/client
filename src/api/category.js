import client from "./client"

export const getCategoriesApi = () => {
  return client.get('/categories');
}

export const getCategoryBySlug = (slug) => {
  return client.get(`/categories/${slug}`);
}
