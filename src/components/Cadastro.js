import React from "react";
import styled from "styled-components";
import Logo from "../assets/MyWallet.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Cadastro() {
  const navigate = useNavigate();
  const [load, setLoad] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  function createUser(event) {
    event.preventDefault();
    setLoad(true);
    const promise = axios.post(
      "https://git.heroku.com/back-mywallet-driven.git/cadastro",
      userData
    );
    promise
      .then((req, res) => {
        setLoad(false);
        navigate("/");
      })
      .catch((res) => {
        setLoad(false);
        if (res.response.status === 409) {
          alert("Email já cadastrado");
        } else {
          alert(
            "Preencha corretamente os dados, todos os campos são obrigatorios"
          );
        }
      });
  }
  return (
    <Container>
      <img src={Logo} alt="logo mywallet" />
      <Form onSubmit={(event) => createUser(event)}>
        <input
          type="text"
          placeholder="Nome"
          value={userData.name}
          disabled={load}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          value={userData.email}
          disabled={load}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          value={userData.password}
          disabled={load}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        ></input>
        <input
          type="password"
          placeholder="Confirme a senha"
          value={userData.repeat_password}
          disabled={load}
          onChange={(e) =>
            setUserData({ ...userData, repeat_password: e.target.value })
          }
        ></input>
        <button type="submit" disabled={load}>
          {load ? <ThreeDots color="#fff" /> : <p>Cadastrar</p>}
        </button>
      </Form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p,
  a {
    font-size: 15px;
    color: #fff;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
  }
  img {
    height: 50px;
    width: 150px;
    margin-bottom: 25px;
  }
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
      text-decoration: none;
    }
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
  }
`;
