import React from "react";
import styled from "styled-components";
import Extrato from "./Extrato";
import { IoExitOutline } from "react-icons/io5";

export default function Home() {
  return (
    <Container>
      <Topo>
        <p>Ola, Fulano</p>
        <IoExitOutline />
      </Topo>
      <Extrato />
      <Adicionar> olaaaaa</Adicionar>
    </Container>
  );
}

const Container = styled.div``;
const Topo = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #fff;
`;
const Adicionar = styled.div``;
