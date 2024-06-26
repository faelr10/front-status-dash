import styled from "styled-components";

export const InfoShowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  width: 82%;
  background-color: #f0f4f8;
  color: #333333;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 28%;
  height: 120px;
  background-image: linear-gradient(to bottom right, #f0f4f8, #d6dbe0);
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
`;

export const TitleCard = styled.div`
  font-size: 20px; /* Tamanho da fonte */
  font-weight: bold; /* Negrito */
  width: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 30%;
`;

export const ValueCard = styled.div`
  font-size: 36px; /* Tamanho da fonte */
  color: #286a8d; /* Cor do texto */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;

export const BoxDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 90%;
  height: 72%;
  background-color: #f0f4f8;
  color: #333333;
  //border: 1px solid silver;
  margin-top: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

export const BoxDetailsFilter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 16%;
  margin-top: 10px;
  margin-bottom: 10px;
  //border: 1px solid silver;
`;

export const FilterDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 30%;
  height: 100%;
  color: black;
  cursor: pointer;
  //border: 1px solid silver;
`;

export const LabelFilter = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1em;
  color: #444;
`;

export const InputDate = styled.input`
  margin-top: 8px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
`;

export const SelectFilter = styled.select`
  margin-top: 8px;
  padding: 5px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  background-size: 15px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #555;
    outline: none;
  }
`;

export const BoxInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 90%;
  height: 78%;
  background-color: #f0f4f8;
  color: #333333;
  //border: 1px solid silver;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  overflow-y: auto;
`;

export const BoxTitleInfoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 98%;
  height: 10%;
  margin-top: 10px;
`;

export const FieldDataDetails = styled.div`
  font-weight: 500;
  font-size: 1em;
  color: #444;
  width: 15%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 40px;
`;

export const FieldNomeDetails = styled.div`
  font-weight: 500;
  font-size: 1em;
  color: #444;
  width: 30%;
  display: flex;
  align-items: start;
`;

export const FieldCategoriaDetails = styled.div`
  font-weight: 500;
  font-size: 1em;
  color: #444;
  width: 20%;
  display: flex;
  align-items: start;
`;

export const FieldValorDetails = styled.div`
  font-weight: 500;
  font-size: 1em;
  color: #444;
  width: 20%;
  display: flex;
  align-items: start;
`;

export const FieldStatusDetails = styled.div`
  font-weight: 500;
  font-size: 1em;
  color: #444;
  width: 15%;
  display: flex;
  align-items: start;
`;

export const BoxAllDataInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 98%;
  height: 80%;
  margin-top: 10px;
  overflow-y: auto;
`;

export const BoxDataInfoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 12%;
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#f9f9f9" : "#e6e6e6"};
`;

export const DataInfoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  height: 100%;
  color: black;
`;
