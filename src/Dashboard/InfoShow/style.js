import styled from "styled-components";

export const InfoShowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 10 0vh;
  width: 82%;
  background-color: #f0f4f8;
  border: 1px solid #e0e0e0;
  color: #333333;
  padding: 10px;
  box-sizing: border-box;
  //se precisar de scroll

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 992px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;
