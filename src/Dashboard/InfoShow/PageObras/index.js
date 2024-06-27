import React, { useEffect, useState } from "react";
import {
  BoxCardsInfo,
  BoxDadosObra,
  BoxInput,
  BoxNewObra,
  BoxSelect,
  BoxSelectObra,
  CardsInfo,
  Container,
  ContainerDadosObra,
  PercentageText,
  ProgressBar,
  ProgressFill,
  Table,
} from "./style";
import {
  getObrasHttp,
  getObrasHttpById,
} from "../../../HttpRequest/Obras/httpRequest";
import Modal from "./Modal/newObraModal";

export function PageObras() {
  const [obras, setObras] = useState([]);
  const [selectedObraId, setSelectedObraId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataObra, setDataObra] = useState({});
  const [dadosView, setDadosView] = useState(false);

  useEffect(() => {
    fetchObras();
  }, []);

  const fetchObras = () => {
    getObrasHttp()
      .then((response) => {
        setObras(response.data);
      })
      .catch((error) => {
        console.error("Error fetching obras:", error);
      });
  };

  const handleObraChange = (e) => {
    setSelectedObraId(e.target.value);
  };

  const handleSearch = async () => {
    if (!selectedObraId) {
      console.log("Selecione uma obra válida.");
      return;
    }

    try {
      const response = await getObrasHttpById(selectedObraId);
      setDataObra(response.data); // Armazena os dados da obra em um array para mapeamento
      setDadosView(true); // Exibe os dados da obra
    } catch (error) {
      console.error("Error fetching obra details:", error);
    }
  };

  console.log(dataObra);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    fetchObras(); // Atualiza as obras após fechar o modal
  };

  return (
    <Container style={{}}>
      <BoxSelectObra>
        <label>Selecione a obra</label>
        <BoxInput>
          <BoxSelect>
            <select value={selectedObraId} onChange={handleObraChange}>
              <option value="">Selecione...</option>
              {obras.map((obra) => (
                <option key={obra.id} value={obra.id}>
                  {obra.nome}
                </option>
              ))}
            </select>
            <button onClick={handleSearch}>Buscar</button>
          </BoxSelect>
          <BoxNewObra>
            <button onClick={openModal}>+ Adicionar nova obra</button>
          </BoxNewObra>
        </BoxInput>
      </BoxSelectObra>
      {dadosView === false ? null : (
        <ContainerDadosObra>
          <h1>
            {dataObra.nome} - {dataObra.construtora}
          </h1>

          <BoxCardsInfo>
            <CardsInfo>
              <label style={{ marginBottom: "10px" }}>PROGRESSO DA OBRA</label>
              <ProgressBar>
                <ProgressFill percentage={25}></ProgressFill>
              </ProgressBar>
              <PercentageText>{25}%</PercentageText>
            </CardsInfo>
            <CardsInfo>
              <label style={{ marginBottom: "10px" }}>
                PERCENTUAL RECEBIDO
              </label>
              <ProgressBar>
                <ProgressFill percentage={35}></ProgressFill>
              </ProgressBar>
              <PercentageText>{35}%</PercentageText>
            </CardsInfo>
          </BoxCardsInfo>

          <BoxDadosObra>
            <h3 style={{ margin: "0" }}>Dados gerais da obra</h3>
            <Table>
              <thead>
                <tr>
                  <th>CONSTRUTORA</th>
                  <th>VALOR RECEBIDO</th>
                  <th>VALOR À RECEBER</th>
                  <th>VALOR TOTAL</th>
                  <th>PERCENTUAL DE CONCLUSÃO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dataObra.construtora}</td>
                  <td>R$ 35.000</td>
                  <td>R$ 65.000</td>
                  <td>R$ 100.000</td>
                  <td>25%</td>
                </tr>
              </tbody>
            </Table>
          </BoxDadosObra>

          <BoxDadosObra>
            <h3 style={{ margin: "0" }}>Detalhes por função</h3>
            <Table>
              <thead>
                <tr>
                  <th>FUNÇÃO</th>
                  <th>TOTAL_HORAS</th>
                  <th>VALOR_HORAS_SALÁRIO_TOTAL</th>
                  <th>VALOR_IMPOSTOS</th>
                  <th>VALOR_OUTROS</th>
                  <th>VALOR_TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {dataObra.dados_obra.map((item, index) => (
                  <tr key={index}>
                    <td>{item.funcao}</td>
                    <td>{item.total_horas}</td>
                    <td>R$ {item.gastos_encargos}</td>
                    <td>0</td>
                    <td>0</td>
                    <td>R$ {item.gastos_encargos}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </BoxDadosObra>
        </ContainerDadosObra>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
}
