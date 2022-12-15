import React from "react";
import styled from "styled-components";
import Logo from "../assets/MyWallet.svg";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { ThreeDots } from "react-loader-spinner";
import api from "./service/api";

export default function Login() {
  const navigate = useNavigate();
  const [load, setLoad] = React.useState(false);
  const [invalidUser, setInvalidUser] = React.useState(false);
  const { setUserData } = React.useContext(UserContext);
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  async function logar(event) {
    event.preventDefault();
    setLoad(true);
    await api
      .post("/login", login)
      .then((res) => {
        setUserData(res.data);
        setLoad(false);
        navigate("/home");
      })
      .catch(() => {
        setInvalidUser(true);
        setLoad(false);
      });
  }

  return (
    <Container>
      <img src={Logo} alt="logo mywallet" />
      <Form onSubmit={(event) => logar(event)}>
        <input
          type="email"
          placeholder="E-mail"
          value={login.email}
          disabled={load}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          value={login.senha}
          disabled={load}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        ></input>
        <button type="submit" disabled={load}>
          {load ? <ThreeDots color="#fff" /> : <p>Entrar</p>}
        </button>
      </Form>
      {invalidUser ? <h2>Email ou senha invalidos</h2> : <></>}
      <br />
      <Link to="/signup">
        <p>Primeira vez? Cadastre-se!</p>
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
  h2 {
    font-size: 15px;
    color: #ff0126;
    font-weight: 500;
    text-decoration: none;
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
