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
import ModalShowImpostos from "./Modal/ShowImpostos.js";
import ModalShowOutros from "./Modal/ShowOutros/index.js";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export function PageObras() {
  const [obras, setObras] = useState([]);
  const [selectedObraId, setSelectedObraId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalImpostosOpen, setIsModalImpostosOpen] = useState(false);
  const [impostos, setImpostos] = useState("");

  const [outros, setOutros] = useState("");
  const [isModalOutrosOpen, setIsModalOutrosOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    fetchObras(); // Atualiza as obras após fechar o modal
  };

  const openModalImpostos = (item) => {
    setImpostos(item);
    setIsModalImpostosOpen(true);
  };
  const closeModalImpostos = () => {
    setIsModalImpostosOpen(false);
  };

  const openModalOutros = (item) => {
    setOutros(item);
    setIsModalOutrosOpen(true);
  };
  const closeModalOutros = () => {
    setIsModalOutrosOpen(false);
  };

  const data = [
    {
      name: "Janeiro",
      uv: 5,
      pv: 10,
      amt: 12,
    },
    {
      name: "Fevereiro",
      uv: 10,
      pv: 20,
      amt: 15,
    },
    {
      name: "Março",
      uv: 15,
      pv: 25,
      amt: 20,
    },
    {
      name: "Abril",
      uv: 20,
      pv: 40,
      amt: 30,
    },
    {
      name: "Maio",
      uv: 40,
      pv: 70,
      amt: 55,
    },
    {
      name: "Junho",
      uv: 60,
      pv: 85,
      amt: 72,
    },
    {
      name: "Julho",
      uv: 100,
      pv: 100,
      amt: 100,
    },
  ];

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
            {dataObra.name} - {dataObra.construction_company}
          </h1>

          <BoxCardsInfo>
            <ResponsiveContainer width="70%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
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
                  <td>{dataObra.construction_company}</td>
                  <td>R$ 35.000</td>
                  <td>R$ 65.000</td>
                  <td>R$ 100.000</td>
                  <td>25%</td>
                </tr>
              </tbody>
            </Table>
          </BoxDadosObra>

          <BoxDadosObra>
            <h3 style={{ margin: "0" }}>Encargos da obra</h3>
            <Table>
              <thead>
                <tr>
                  <th>ENCARGO</th>
                  <th>VALOR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6% NOTA FISCAL</td>
                  <td>R$ 400,00</td>
                </tr>
                <tr>
                  <td>CONTABILIDADE</td>
                  <td>R$ 2400,00</td>
                </tr>
                <tr>
                  <td>MÃO DE OBRA</td>
                  <td>R$ 22400,00</td>
                </tr>
              </tbody>
            </Table>
          </BoxDadosObra>
          <BoxDadosObra>
            <h3 style={{ margin: "0" }}>Encargos por função</h3>
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
                {dataObra.data_obra.map((item, index) => (
                  <tr key={index}>
                    <td>{item.function}</td>
                    <td>{item.total_hours}h</td>
                    <td>R$ {item.hours_worked_value}</td>
                    <td onClick={() => openModalImpostos(item)}>
                      {/* R$ {item.total_impostos} */}
                      R$ 3.000,00
                    </td>
                    <td onClick={() => openModalOutros(item)}>
                      {/* R$ {item.total_outros} */}
                      R$ 3.000,00
                    </td>
                    <td>R$ {item.total_gastos}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </BoxDadosObra>
          <BoxDadosObra>
            <h3 style={{ margin: "0" }}>Encargos por funcionário</h3>
            <Table>
              <thead>
                <tr>
                  <th>FUNCIONÁRIO</th>
                  <th>TOTAL_HORAS</th>
                  <th>VALOR_HORAS_SALÁRIO_TOTAL</th>
                  <th>VALOR_IMPOSTOS</th>
                  <th>VALOR_OUTROS</th>
                  <th>VALOR_TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Diego</td>
                  <td>220h</td>
                  <td>R$ 1986,00</td>
                  <td>R$ 1034,20</td>
                  <td>R$ 623,40</td>
                  <td>R$ 3652,60</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>220h</td>
                  <td>R$ 1986,00</td>
                  <td>R$ 1034,20</td>
                  <td>R$ 623,40</td>
                  <td>R$ 3652,60</td>
                </tr>
                <tr>
                  <td>Pedro</td>
                  <td>220h</td>
                  <td>R$ 1986,00</td>
                  <td>R$ 1034,20</td>
                  <td>R$ 623,40</td>
                  <td>R$ 3652,60</td>
                </tr>
              </tbody>
            </Table>
          </BoxDadosObra>
        </ContainerDadosObra>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <ModalShowImpostos
        isOpen={isModalImpostosOpen}
        onClose={closeModalImpostos}
        dataObra={impostos}
      />
      <ModalShowOutros
        isOpen={isModalOutrosOpen}
        onClose={closeModalOutros}
        dataObra={outros}
      />
    </Container>
  );
}
