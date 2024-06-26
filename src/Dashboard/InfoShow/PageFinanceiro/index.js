import {
  CardsContainer,
  Card,
  TitleCard,
  ValueCard,
  BoxDetailsContainer,
  BoxDetailsFilter,
  FilterDetails,
  LabelFilter,
  InputDate,
  SelectFilter,
  BoxInfoDetails,
  BoxTitleInfoDetails,
  BoxAllDataInfoDetails,
  BoxDataInfoDetails,
  FieldDataDetails,
  FieldNomeDetails,
  FieldCategoriaDetails,
  FieldValorDetails,
  FieldStatusDetails,
} from "./style";

const mockData = [
  {
    date: "10/10/2021",
    description: "Imposto de Renda",
    category: "Impostos",
    value: "R$ 500,00",
    status: "Pago",
  },
  {
    date: "15/10/2021",
    description: "Pagamento de Fornecedores",
    category: "Pagamentos",
    value: "R$ 2000,00",
    status: "Pago",
  },
  {
    date: "20/10/2021",
    description: "Aluguel de Equipamentos",
    category: "Aluguel",
    value: "R$ 800,00",
    status: "Pago",
  },
  {
    date: "25/10/2021",
    description: "Salário de Funcionários",
    category: "Pagamentos",
    value: "R$ 3000,00",
    status: "Pago",
  },
  {
    date: "10/10/2021",
    description: "Imposto de Renda",
    category: "Impostos",
    value: "R$ 500,00",
    status: "Pendente",
  },
  {
    date: "15/10/2021",
    description: "Pagamento de Fornecedores",
    category: "Pagamentos",
    value: "R$ 2000,00",
    status: "Pendente",
  },
  {
    date: "20/10/2021",
    description: "Aluguel de Equipamentos",
    category: "Aluguel",
    value: "R$ 800,00",
    status: "Vencida",
  },
  {
    date: "25/10/2021",
    description: "Salário de Funcionários",
    category: "Pagamentos",
    value: "R$ 3000,00",
    status: "Vencida",
  },
  {
    date: "10/10/2021",
    description: "Imposto de Renda",
    category: "Impostos",
    value: "R$ 500,00",
    status: "Vencida",
  },
  {
    date: "15/10/2021",
    description: "Pagamento de Fornecedores",
    category: "Pagamentos",
    value: "R$ 2000,00",
    status: "Vencida",
  },
  {
    date: "20/10/2021",
    description: "Aluguel de Equipamentos",
    category: "Aluguel",
    value: "R$ 800,00",
    status: "Vencida",
  },
  {
    date: "25/10/2021",
    description: "Salário de Funcionários",
    category: "Pagamentos",
    value: "R$ 3000,00",
    status: "Vencida",
  },
  {
    date: "10/10/2021",
    description: "Imposto de Renda",
    category: "Impostos",
    value: "R$ 500,00",
    status: "Vencida",
  },
  {
    date: "15/10/2021",
    description: "Pagamento de Fornecedores",
    category: "Pagamentos",
    value: "R$ 2000,00",
    status: "Vencida",
  },
  {
    date: "20/10/2021",
    description: "Aluguel de Equipamentos",
    category: "Aluguel",
    value: "R$ 800,00",
    status: "Vencida",
  },
  {
    date: "25/10/2021",
    description: "Salário de Funcionários",
    category: "Pagamentos",
    value: "R$ 3000,00",
    status: "Vencida",
  },
];

export function PageFinanceiro() {
  return (
    <>
      <CardsContainer>
        <Card>
          <TitleCard>Recebidas</TitleCard>
          <ValueCard>2100,82 R$</ValueCard>
        </Card>
        <Card>
          <TitleCard>À receber</TitleCard>
          <ValueCard> 509,86 R$</ValueCard>
        </Card>
        <Card>
          <TitleCard>Total</TitleCard>
          <ValueCard>2610,68 R$</ValueCard>
        </Card>
      </CardsContainer>
      <BoxDetailsContainer>
        <BoxDetailsFilter>
          <FilterDetails>
            <LabelFilter>Data início</LabelFilter>
            <InputDate type="date" />
          </FilterDetails>

          <FilterDetails>
            <LabelFilter>Data fim</LabelFilter>
            <InputDate type="date" />
          </FilterDetails>

          <FilterDetails>
            <LabelFilter>Categoria</LabelFilter>
            <SelectFilter>
              <option value="categoria0">Todas</option>
              <option value="categoria1">Impostos</option>
              <option value="categoria2">Pagamentos Funcionários</option>
              <option value="categoria3">Gastos extras</option>
            </SelectFilter>
          </FilterDetails>

          <FilterDetails>
            <LabelFilter>Status</LabelFilter>
            <SelectFilter>
              <option value="status0">Todas</option>
              <option value="status1">Pendentes</option>
              <option value="status2">Recebidas</option>
              <option value="status3">Em atraso</option>
            </SelectFilter>
          </FilterDetails>
        </BoxDetailsFilter>

        <BoxInfoDetails>
          <BoxTitleInfoDetails>
            <FieldDataDetails>Data</FieldDataDetails>
            <FieldNomeDetails>Nome</FieldNomeDetails>
            <FieldCategoriaDetails>Categoria</FieldCategoriaDetails>
            <FieldValorDetails>Valor</FieldValorDetails>
            <FieldStatusDetails>Status</FieldStatusDetails>
          </BoxTitleInfoDetails>

          <BoxAllDataInfoDetails>
            {mockData.map((item, index) => (
              <BoxDataInfoDetails key={index} index={index}>
                <FieldDataDetails>{item.date}</FieldDataDetails>
                <FieldNomeDetails>{item.description}</FieldNomeDetails>
                <FieldCategoriaDetails>{item.category}</FieldCategoriaDetails>
                <FieldValorDetails>{item.value}</FieldValorDetails>
                <FieldStatusDetails
                  //pendente = amarelo
                  //pago = verde
                  //vencido = vermelho
                  style={{
                    color:
                      item.status === "Pendente"
                        ? "#ffae42" // amarelo
                        : item.status === "Pago"
                        ? "#4caf50" // verde
                        : "#f44336", // vermelho
                  }}
                >
                  {item.status}
                </FieldStatusDetails>
              </BoxDataInfoDetails>
            ))}
          </BoxAllDataInfoDetails>
        </BoxInfoDetails>
      </BoxDetailsContainer>
    </>
  );
}
