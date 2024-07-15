import axios from "axios";

export async function postDetailsHttp(details) {
  return axios.post("https://status-dash.vercel.app/obras/details_obra", details);
}
