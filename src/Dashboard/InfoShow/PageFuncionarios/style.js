import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 10px;
  height: 150px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;

  p {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 5px;
  }
`;

export const BoxRegister = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const BoxRegisterData = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  height: 55px;
  width: 100%;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  input[type="date"] {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 90%;
    box-sizing: border-box;
    background-color: #efefef;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const BoxRegisterNome = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  height: 55px;
  width: 100%;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 90%;
    box-sizing: border-box;
    background-color: #efefef;
  }
`;

export const BoxRegisterCargo = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 10px;
  height: 55px;
  width: 100%;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  select {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 90%;
    box-sizing: border-box;
  }
`;

export const BoxRegisterDocument = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 10px;
  height: 55px;
  width: 100%;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 90%;
    box-sizing: border-box;
    background-color: #efefef;
  }

`;

export const BoxRegisterButton = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  margin-top: 24px;
  width: 100%;

  button {
    margin-left: 10px;
    padding: 10px 60px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
      padding: 10px 0;
      margin-left: 0;
    }
  }
`;
