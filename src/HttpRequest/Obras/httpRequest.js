import axios from "axios";

export async function getObrasHttp() {
  return axios.get("http://localhost:3000/obras");
}

export async function postObraHttp(obra) {
  return axios.post("http://localhost:3000/obras", obra);
}

export async function getObrasHttpById(id) {
  return axios.get(`http://localhost:3000/obras/${id}`);
}