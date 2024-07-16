import axios from "axios";

export async function getAllCargosHttp(details) {
  return axios.get(`${process.env.REACT_APP_URL_API}/cargos`);
}
