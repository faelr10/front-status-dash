import React, { useEffect, useState } from "react";
import { InfoShowBox } from "./style";
import { SelectPage } from "./helpersInfoShow/selectPage";
import { PageFinanceiro } from "./PageFinanceiro";
import { PageObras } from "./PageObras";
import { PageStatusGestor } from "./PageStatusGestor";

export const Content = {
  StatusGestor: "StatusGestor",
  financeiro: "financeiro",
  obras: "obras",
  funcionarios: "funcionarios",
  prazos: "prazos",
};

export function InfoShow({ content }) {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const title = await SelectPage({ content });
      setPageTitle(title);
      console.log(title);
    }
    fetchData();
  }, [content]);

  const renderPage = () => {
    switch (content) {
      case Content.financeiro:
        return <PageFinanceiro />;
      case Content.obras:
        return <PageObras />;
      case Content.StatusGestor:
        return <PageStatusGestor />;
      default:
        return <div>Conteúdo não encontrado</div>;
    }
  };

  return (
    <InfoShowBox>
      <h1 style={{ margin:"0" }}>{pageTitle}</h1>
      {renderPage()}
    </InfoShowBox>
  );
}
