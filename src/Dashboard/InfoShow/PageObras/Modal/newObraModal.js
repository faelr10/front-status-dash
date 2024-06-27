// Modal.js
import React from "react";
import {
  Button,
  ButtonContainer,
  Form,
  FormGroup,
  Input,
  Label,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./style";
import { postObraHttp } from "../../../../HttpRequest/Obras/httpRequest";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements[0].value, e.target.elements[1].value);
    postObraHttp({
      nome: e.target.elements[0].value,
      construtora: e.target.elements[1].value,
      valor_final: e.target.elements[2].value,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching obras:", error);
      });
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Adicionar Nova Obra</ModalTitle>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome da obra:</Label>
            <Input type="text" required />
          </FormGroup>
          <FormGroup>
            <Label>Construtora:</Label>
            <Input type="text" required />
          </FormGroup>
          <FormGroup>
            <Label>Valor final:</Label>
            <Input type="text" required />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Adicionar Obra</Button>
            <Button className="cancel-button" onClick={onClose}>
              Cancelar
            </Button>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
