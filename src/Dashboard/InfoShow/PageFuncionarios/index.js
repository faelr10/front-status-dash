import { useEffect, useState } from "react";
import {
  BoxRegister,
  BoxRegisterButton,
  BoxRegisterCargo,
  BoxRegisterDocument,
  BoxRegisterNome,
  Container,
  RegisterContainer,
} from "./style";
import { postFuncionarioHttp } from "../../../HttpRequest/Funcionarios/httpRequest";
import { getAllCargosHttp } from "../../../HttpRequest/Cargos/httpRequest";

const funcionarios = ["Bombeiro1", "Bombeiro2", "Auxiliar", "Encarregado"];

export function PageFuncionarios() {
  const [inputNewFuncionario, setInputNewFuncionario] = useState({});
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    fetchObras();
  }, []);

  const fetchObras = () => {
    getAllCargosHttp()
      .then((response) => {
        setCargos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching obras:", error);
      });
  };

  function handleDocumentChange(e) {
    console.log(e.target.value);
    setInputNewFuncionario((prevState) => ({
      ...prevState,
      data: e.target.value,
    }));
  }

  function handleNomeChange(e) {
    console.log(e.target.value);
    setInputNewFuncionario((prevState) => ({
      ...prevState,
      nome: e.target.value,
    }));
  }

  const handleCargoChange = (e) => {
    console.log(e.target.value);
    setInputNewFuncionario((prevState) => ({
      ...prevState,
      cargo: e.target.value,
    }));
  };

  const handleRegister = () => {
    console.log(inputNewFuncionario);
    postFuncionarioHttp(inputNewFuncionario);
  };

  return (
    <Container>
      <RegisterContainer>
        <p>Registrar novo funcionario </p>
        <BoxRegister>
          <BoxRegisterNome>
            <label>Nome</label>
            <input onChange={handleNomeChange} type="text" placeholder="Nome" />
          </BoxRegisterNome>
          <BoxRegisterCargo>
            <label>Cargo</label>
            <select onChange={handleCargoChange}>
              <option value="">Selecione...</option>
              {cargos.map((func) => (
                <option key={func.id} value={func}>
                  {func.nome}
                </option>
              ))}
            </select>
          </BoxRegisterCargo>
          <BoxRegisterDocument>
            <label>CPF</label>
            <input
              onChange={handleDocumentChange}
              type="text"
              placeholder="CPF"
            />
          </BoxRegisterDocument>
          <BoxRegisterButton>
            <button onClick={handleRegister}>Registrar</button>
          </BoxRegisterButton>
        </BoxRegister>
      </RegisterContainer>
    </Container>
  );
}
