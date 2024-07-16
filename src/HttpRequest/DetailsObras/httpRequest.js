import axios from "axios";

export async function postDetailsHttp(details) {
  return axios.post(`${process.env.REACT_APP_URL_API}/obras/details_obra`, details);
}
