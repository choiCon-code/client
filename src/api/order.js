import client from "./client";

export const checkout = ({ fullname, address, phone, email, note }) => {
  return client.post('/orders/checkout', { fullname, address, phone, email, note });
}
