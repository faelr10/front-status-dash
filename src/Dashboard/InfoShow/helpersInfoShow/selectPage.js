import { Content } from "..";

export async function SelectPage({ content }) {
  let title;
  switch (content) {
    case Content.financeiro:
      title = "Financeiro";
      break;
    case Content.obras:
      title = "Obras";
      break;
    case Content.funcionarios:
      title = "Funcionários";
      break;
    case Content.prazos:
      title = "Prazos";
      break;
    case Content.StatusGestor:
      title = "Status Gestor";
      break;
    default:
      title = "";
      break;
  }
  return title;
}
