import React from "react";
import styled from "styled-components";

export default function Extrato() {
  return (
    <Container>
      <p>
        Não há registros de <br />
        entrada ou saída
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 326px;
  height: 445px;
  p {
    height: 445px;
    width: 326px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #868686;
  }
`;
