import client from "./client"

export const registerApi = ({ firstName, lastName, gender, birthday, email, password }) => {
  return client.post('/auth/register', { firstName, lastName, gender, birthday, email, password });
}

export const loginApi = ({ email, password }) => {
  return client.post('/auth/login', { email, password });
}
