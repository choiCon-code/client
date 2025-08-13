import client from "./client"

export const addToCart = ({ productId, quantity }) => {
  return client.post('/cart', { productId, quantity });
}

export const getCart = () => {
  return client.get('/cart');
}

export const updateCartQty = (cartId, quantity) => {
  return client.put(`/cart/${cartId}/update-qty`, { quantity });
}
