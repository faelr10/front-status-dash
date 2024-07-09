import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* fundo semi-transparente */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  width: 40rem;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* sombra suave */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #333; /* cor do título */
`;

export const ModalData = styled.div`
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
  margin-top: 1rem;
`;

export const DataItem = styled.div`
  font-size: 1.2rem;
  color: #555; /* cor do texto */
  width: 100%;
  display: flex;
`;

export const DataLabel = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
  width: 10rem;
  display: flex;
`;

export const DataValue = styled.span`
  color: #777; /* cor do valor */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Botão Adicionar com cor azul */
  background-color: #286a8d;
  color: white;

  &:hover {
    background-color: #1c4d6b;
  }

  /* Botão Cancelar com cor vermelha */
  &.cancel-button {
    background-color: #d32f2f;
  }

  &.cancel-button:hover {
    background-color: #b71c1c;
  }
`;
