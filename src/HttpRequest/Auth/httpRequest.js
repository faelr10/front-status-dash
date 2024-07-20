import axios from "axios";

export async function loginHttp(data) {
  return axios.post(`http://localhost:3000/auth/login`, data);
}
