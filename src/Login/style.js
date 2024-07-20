import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 0;
  padding: 0;

  background-color: #286a8d;

  border: 1px solid red;
`;

export const BoxLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 30%;
  height: 65%;

  background-color: white;

  border: 1px solid #e0e0e0;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 80%;
  }
`;

export const BoxImgTitle = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const BoxForm = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BoxEmail = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;

  label {
    color: #101010;
    font-size: 1.1em;
  }
  input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #808080;
    font-size: 1em;

    padding-left: 10px;

    /* Estilo padrão */
    &:focus {
      border: 1px solid #286a8d;
      outline: none; /* Remove o contorno padrão do navegador */
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.5); /* Exemplo de sombra ao focar */
    }
  }
`;

export const BoxPassword = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;

  label {
    color: #101010;
    font-size: 1.1em;
  }

  input {
    width: 95%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #808080;
    font-size: 1em;

    padding-left: 10px;

    /* Estilo padrão */
    &:focus {
      border: 1px solid #286a8d;
      outline: none; /* Remove o contorno padrão do navegador */
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.5); /* Exemplo de sombra ao focar */
    }
  }
`;

export const ForgotPassword = styled.div`
  width: 90%;
  height: 10%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  a {
    color: #286a8d;
    text-decoration: none;
  }
`;

export const BoxEnter = styled.div`
  width: 100%;
  height: 12%;
  //border: 1px solid #e0e0e0;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 60%;
    height: 70%;
    background-color: #286a8d;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    /* Estilo padrão */
    &:hover {
      background-color: #1c4b63;
    }
  }
`;

export const BoxRegister = styled.div`
  width: 100%;
  height: 12%;
  //border: 1px solid #e0e0e0;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #286a8d;
    text-decoration: none;
  }
`;
