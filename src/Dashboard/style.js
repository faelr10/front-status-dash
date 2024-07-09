import styled from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #286A8D;
  color: white;
  width: 100%;

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;
