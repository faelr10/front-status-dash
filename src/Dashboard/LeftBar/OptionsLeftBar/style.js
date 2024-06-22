import styled from "styled-components";

export const OptionsLeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  background-color: #1f2126; /* Cor de fundo mais escura */
  color: white;
  width: 90%;
`;

export const Option = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente os itens */
  justify-content: flex-start; /* Alinha os itens à esquerda */
  padding: 16px 20px; /* Aumentei o padding para melhor espaçamento */
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #3a3f4b; /* Cor da borda mais escura */
  width: 80%;
  
  &:hover {
    background-color: #2c2f37; /* Cor de fundo mais escura no hover */
  }
`;
