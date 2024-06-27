import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const BoxNewObra = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  height: 100%;

  button {
    padding: 10px;
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    margin-left: 1rem;
    background-color: #388e3c; /* Verde um pouco mais escuro */
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 0.5rem;

    button {
      display: none;
    }
  }
`;

export const BoxSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 50%;
  height: 100%;

  button {
    padding: 10px;
    border: none;
    border-radius: 6px;
    width: 25%;
    box-sizing: border-box;
    margin-left: 1rem;
    background-color: #286a8d; /* Cor azul escuro */
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    padding: 0.5rem;
    width: 100%;

    select {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export const BoxSelectObra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  min-height: 10%;
  border-bottom: 1px solid #ccc;

  label {
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 0.5rem;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 90%;
  height: 100%;

  select {
    margin-left: 1rem;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 30%;
    box-sizing: border-box;
  }

  button:hover {
    background-color: #1c4d6b; /* Cor mais escura ao passar o mouse */
  }

  @media (max-width: 768px) {
    flex-direction: column;

    select {
      margin-left: 0;
      margin-top: 1rem;
      width: 90%;
    }

    button {
      margin-top: 1rem;
      width: 50%;
    }
  }
`;

export const ContainerDadosObra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  min-height: 85%;
  overflow-y: auto; /* Adiciona scroll vertical se necessário */
  overflow-x: hidden; /* Esconde o scroll horizontal */

  //border: 1px solid #ccc;

  h1 {
    display: flex;
    width: 100%;
    align-items: start;
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const BoxDadosObra = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  min-height: 10rem;
  margin-top: 1rem;
  //border: 1px solid #ccc;
`;

export const BoxCardsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 62%;
  height: 20%;
  /* border: 1px solid #ccc; */
`;

export const CardsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid black;
`;

export const ProgressBar = styled.div`
  width: 80%;
  height: 10px;
  background-color: lightgray;
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background: linear-gradient(
    to left,
    #33cc33,
    #ff6666
  ); /* Cores gradativas */
  border-radius: 5px;
  transition: width 0.5s ease; /* Transição suave da largura */
`;

export const PercentageText = styled.span`
  font-size: 14px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    border: 1px solid #dddddd;
    padding: 12px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
    color: #333333;
    font-weight: bold;
    text-transform: uppercase;
  }

  td {
    background-color: #ffffff;
    color: #333333;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f0f0f0;
  }

  .clickable {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
  }
`;
