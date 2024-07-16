import axios from "axios";

export async function getObrasHttp() {
  console.log(process.env.REACT_APP_URL_API);
  return axios.get(`https://status-dash.vercel.app/obras`);
}

export async function postObraHttp(obra) {
  return axios.post(`${process.env.REACT_APP_URL_API}/obras`, obra);
}

export async function getObrasHttpById(id) {
  return axios.get(`${process.env.REACT_APP_URL_API}/obras/${id}`);
}
