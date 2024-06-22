import styled from "styled-components";

export const LeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  background-color: #1f2126; /* Cor de fundo mais escura */
  color: white;
  border: 1px solid black;
  width: 18%;
`;

export const TitleLeftBar = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  width: 80%;

  border-bottom: 1px solid white;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
