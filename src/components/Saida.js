import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import dayjs from "dayjs";

export default function Saida() {
  const now = dayjs().format("DD/MM");
  const navigate = useNavigate();
  const [saida, setSaida] = React.useState({
    data: now,
    valor: "",
    descricao: "",
    type: "saida",
  });
  const { userData } = React.useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  function novaSaida(event) {
    event.preventDefault();
    const promise = axios.post("http://localhost:5000/saida", saida, config);
    promise.then((res) => {
      navigate("/home");
    });
  }
  return (
    <Container>
      <Topo>
        <p>Nova saida</p>
      </Topo>
      <Form onSubmit={(event) => novaSaida(event)}>
        <input
          type="number"
          value={saida.valor}
          placeholder="Valor"
          onChange={(e) =>
            setSaida({ ...saida, valor: parseInt(e.target.value) })
          }
        ></input>
        <input
          type="text"
          value={saida.descricao}
          placeholder="Descrição"
          onChange={(e) => setSaida({ ...saida, descricao: e.target.value })}
        ></input>
        <button>
          <p>Salvar saida</p>
        </button>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Topo = styled.div`
  font-size: 25px;
  font-weight: 700;
  width: 326px;
  height: 70px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  input {
    width: 326px;
    height: 58px;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    margin-bottom: 15px;
    padding-left: 15px;

    &::placeholder {
      color: #000000;
      font-size: 20px;
      font-weight: 400;
    }
  }
  button {
    height: 45px;
    width: 326px;
    font-size: 21px;
    color: #fff;
    background-color: #a328d6;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 21px;
      color: #fff;
      font-weight: 700;
      text-decoration: none;
    }
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
  }
`;
