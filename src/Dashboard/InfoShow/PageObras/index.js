import React, { useEffect, useState } from "react";
import {
  BoxInput,
  BoxNewObra,
  BoxSelect,
  BoxSelectObra,
  Container,
  ContainerDadosObra,
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
  const [dataObra, setDataObra] = useState([]);

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
      setDataObra([response.data]); // Armazena os dados da obra em um array para mapeamento
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

  return (
    <Container>
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
      <ContainerDadosObra>
        {dataObra.map((obra) => (
          <div key={obra.id}>
            <h1>{obra.nome}</h1>
            <p>{obra.construtora}</p>
            <p>{obra.valor_final}</p>
          </div>
        ))}
      </ContainerDadosObra>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
}
