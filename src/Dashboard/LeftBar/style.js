import styled from "styled-components";

export const LeftBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  background-color: #286a8d; /* Cor de fundo mais escura */
  color: white;
  width: 18%;
  transition: width 0.3s ease; /* Adiciona transição para a largura */

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const TitleLeftBar = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const OptionsLeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  color: white;
  width: 90%;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente os itens */
  justify-content: flex-start; /* Alinha os itens à esquerda */
  padding: 16px 20px; /* Aumentei o padding para melhor espaçamento */
  cursor: pointer;
  transition: background-color 0.6s;
  border-bottom: 1px solid #3a3f4b; /* Cor da borda mais escura */

  &:hover {
    background-color: #1f4a73; /* Cor de fundo mais escura no hover */
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
