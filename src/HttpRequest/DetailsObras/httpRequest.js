import axios from "axios";

export async function postDetailsHttp(details) {
  return axios.post("http://localhost:3000/obras/details_obra", details);
}
