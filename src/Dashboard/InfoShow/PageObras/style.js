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
  min-height: 15%;
  border-bottom: 1px solid #ccc;

  label {
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
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

  @media (max-width: 768px) {
    min-height: auto;
  }
`;