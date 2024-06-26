import { BoxInput, BoxSelectObra, Container } from "./style";

export function PageObras() {
  return (
    <Container>
      <BoxSelectObra>
        <label>Selecione a obra</label>
        <BoxInput>
          <select>
            <option value="obra1">Santo Antônio</option>
            <option value="obra2">Mangabeiras</option>
            <option value="obra3">Prado</option>
          </select>
          <button>Buscar</button>
        </BoxInput>
      </BoxSelectObra>
    </Container>
  );
}
