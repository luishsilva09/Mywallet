import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import dayjs from "dayjs";
import { ThreeDots } from "react-loader-spinner";

export default function Saida() {
  const now = dayjs().format("DD/MM");
  const navigate = useNavigate();
  const [load, setLoad] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);
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
    setLoad(true);
    const promise = axios.post("http://localhost:5000/saida", saida, config);
    promise
      .then((res) => {
        setLoad(false);
        navigate("/home");
      })
      .catch((res) => {
        setLoad(false);
        setInvalid(true);
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
          disabled={load}
          onChange={(e) =>
            setSaida({
              ...saida,
              valor: parseFloat(
                Number(e.target.value.replace(/[^0-9][.]/g, ""))
              ),
            })
          }
        ></input>
        <input
          type="text"
          value={saida.descricao}
          placeholder="Descrição"
          disabled={load}
          onChange={(e) => setSaida({ ...saida, descricao: e.target.value })}
        ></input>
        {invalid ? <h2>Ex: valor : 30,00 , Descrição: comida</h2> : <></>}
        <br />
        <button disabled={load}>
          {load ? <ThreeDots color="#fff" /> : <p>Salvar saida</p>}
        </button>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 15px;
    color: #ff0126;
    font-weight: 500;
    text-decoration: none;
  }
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
