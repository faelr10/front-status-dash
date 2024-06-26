import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  width: 100%;

  // Responsivo
  @media (max-width: 768px) {
    height: auto; /* Ajuste para altura automática */
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
    margin-bottom: 0.5rem; /* Reduzi um pouco a margem inferior */
    margin-top: 1rem;
  }

  // Responsivo
  @media (max-width: 768px) {
    min-height: auto; /* Ajuste para altura automática */
    padding: 0.5rem; /* Reduzi o padding para economizar espaço */
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
    padding: 8px; /* Aumentei o padding para melhorar o visual em dispositivos móveis */
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20%; /* Aumentei a largura para ocupar mais espaço */
    box-sizing: border-box;
  }

  button {
    padding: 10px; /* Aumentei o padding para melhorar a usabilidade em telas menores */
    border: none; /* Removi a borda para um visual mais limpo */
    border-radius: 6px;
    width: 10%; /* Ajustei a largura para ocupar uma porção maior da tela */
    box-sizing: border-box;
    margin-left: 1rem;
    background-color: #286a8d; /* Cor azul escuro */
    color: white; /* Texto em branco para contrastar */
    cursor: pointer; /* Adicionei cursor pointer para indicar interatividade */
    transition: background-color 0.3s ease; /* Adicionei transição suave na mudança de cor */
  }

  button:hover {
    background-color: #1c4d6b; /* Cor mais escura ao passar o mouse */
  }

  // Responsivo
  @media (max-width: 768px) {
    flex-direction: column; /* Altera para coluna em telas menores */
    
    select {
      margin-left: 0; /* Remove margem esquerda */
      margin-top: 1rem; /* Adiciona margem superior */
      width: 90%; /* Ocupa toda a largura disponível */
      margin:0;
    }

    button {
      margin-top: 1rem; /* Adiciona margem superior ao botão */
      width: 50%; /* Ocupa toda a largura disponível */
    }
  }
`;
