import axios from "axios";

export async function getObrasHttp() {
  return axios.get("https://status-dash.vercel.app/obras");
}

export async function postObraHttp(obra) {
  return axios.post("https://status-dash.vercel.app/obras", obra);
}

export async function getObrasHttpById(id) {
  return axios.get(`https://status-dash.vercel.app/obras/${id}`);
}