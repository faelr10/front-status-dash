import axios from "axios";

export async function getFuncionariosHttp() {
  return axios.get("http://localhost:3000/funcionarios");
}

export async function postFuncionarioHttp(funcionario) {
  return axios.post("http://localhost:3000/funcionarios", funcionario);
}

// export async function postObraHttp(obra) {
//   return axios.post("http://localhost:3000/obras", obra);
// }

// export async function getObrasHttpById(id) {
//   return axios.get(`http://localhost:3000/obras/${id}`);
// }
