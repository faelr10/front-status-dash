import { useEffect, useState } from "react";
import {
  BoxRegister,
  BoxRegisterButton,
  BoxRegisterData,
  BoxRegisterFunction,
  BoxRegisterHoras,
  BoxRegisterObra,
  Container,
  RegisterContainer,
} from "./style";
import { getObrasHttp } from "../../../HttpRequest/Obras/httpRequest";
import { getFuncionariosHttp } from "../../../HttpRequest/Funcionarios/httpRequest";
import { postDetailsHttp } from "../../../HttpRequest/DetailsObras/httpRequest";

export function PageStatusGestor() {
  const [obras, setObras] = useState([]);
  const [selectedAllDataObra, setSelectedAllDataObra] = useState({
    responsaveis: [{ profissional: "", horas: "" }],
    data: "",
    obra_id: "",
  });
  const [funcionarios, setFuncionarios] = useState([]);

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

    getFuncionariosHttp()
      .then((response) => {
        setFuncionarios(response.data);
      })
      .catch((error) => {
        console.error("Error fetching funcionarios:", error);
      });
  };

  function handleDataChange(e) {
    console.log(e.target.value);
    setSelectedAllDataObra((prevState) => ({
      ...prevState,
      data: e.target.value,
    }));
  }

  function handleObraChange(e) {
    console.log(e.target.value);
    setSelectedAllDataObra((prevState) => ({
      ...prevState,
      obra_id: e.target.value,
    }));
  }

  const handleResponsavelChange = (e) => {
    const novoResponsavel = e.target.value;
    setSelectedAllDataObra((prevState) => ({
      ...prevState,
      responsaveis: [
        { ...prevState.responsaveis[0], profissional: novoResponsavel },
      ],
    }));
  };

  const handleBlur = (e) => {
    console.log("Valor atualizado:", e.target.value);

    setSelectedAllDataObra((prevState) => ({
      ...prevState,
      responsaveis: [{ ...prevState.responsaveis[0], horas: e.target.value }],
    }));
  };

  const handleRegister = async () => {
    // Converte as horas para um número inteiro, se necessário
    selectedAllDataObra.responsaveis[0].horas = parseInt(selectedAllDataObra.responsaveis[0].horas);
  
    try {
      // Chama a função de requisição HTTP assíncrona para postar os detalhes da obra
      const response = await postDetailsHttp(selectedAllDataObra);
      console.log("Sucesso:", response); // Exibe mensagem de sucesso com a resposta completa, se necessário
    } catch (error) {
      console.error("Erro:", error); // Exibe detalhes do erro, se ocorrer algum problema na requisição
    }
  };

  return (
    <Container>
      <RegisterContainer>
        <p>Novo Registro </p>
        <BoxRegister>
          <BoxRegisterData>
            <label>Data</label>
            <input onChange={handleDataChange} type="date" />
          </BoxRegisterData>
          <BoxRegisterObra>
            <label>Obra</label>
            <select onChange={handleObraChange}>
              <option value="">Selecione...</option>
              {obras.map((obra) => (
                <option key={obra.id} value={obra.id}>
                  {obra.nome}
                </option>
              ))}
            </select>
          </BoxRegisterObra>
          <BoxRegisterFunction>
            <label>Funcionário</label>
            <select onChange={handleResponsavelChange}>
              <option value="">Selecione...</option>
              {funcionarios.map((obra) => (
                <option key={obra.id} value={obra.id}>
                  {obra.nome}
                </option>
              ))}
            </select>
          </BoxRegisterFunction>
          <BoxRegisterHoras>
            <label>Horas</label>
            <input
              type="number"
              min="0"
              max="24"
              step="1"
              placeholder="0"
              onBlur={handleBlur}
            />
          </BoxRegisterHoras>
          <BoxRegisterButton>
            <button onClick={handleRegister}>Registrar</button>
          </BoxRegisterButton>
        </BoxRegister>
      </RegisterContainer>
    </Container>
  );
}
