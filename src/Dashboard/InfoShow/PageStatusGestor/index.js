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

export function PageStatusGestor() {
  return (
    <Container>
      <RegisterContainer>
        <p>Novo Registro </p>
        <BoxRegister>
          <BoxRegisterData>
            <label>Data</label>
            <input type="date" />
          </BoxRegisterData>
          <BoxRegisterObra>
            <label>Obra</label>
            <select>
              <option value="obra1">Santo Antônio</option>
              <option value="obra2">Mangabeiras</option>
              <option value="obra3">Prado</option>
            </select>
          </BoxRegisterObra>
          <BoxRegisterFunction>
            <label>Função</label>
            <select>
              <option value="funcao1">Encarregado</option>
              <option value="funcao2">Bombeiro 1</option>
              <option value="funcao3">Bombeiro 2</option>
              <option value="funcao4">Ajudante</option>
            </select>
          </BoxRegisterFunction>
          <BoxRegisterHoras>
            <label>Horas</label>
            <input type="number" min="0" max="24" step="1" placeholder="0" />
          </BoxRegisterHoras>
          <BoxRegisterButton>
            <button>Registrar</button>
          </BoxRegisterButton>
        </BoxRegister>
      </RegisterContainer>
    </Container>
  );
}
