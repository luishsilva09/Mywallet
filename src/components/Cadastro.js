import React from "react";
import styled from "styled-components";
import Logo from "../assets/MyWallet.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  const [cadastro, setCadastro] = React.useState({
    nome: "",
    email: "",
    senha: "",
    confirmeSenha: "",
  });

  function cadastrar(event) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <Container>
      <img src={Logo} alt="logo mywallet" />
      <Form onSubmit={(event) => cadastrar(event)}>
        <input
          type="text"
          placeholder="Nome"
          value={cadastro.nome}
          onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })}
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          value={cadastro.email}
          onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          value={cadastro.senha}
          onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
        ></input>
        <input
          type="password"
          placeholder="Confirme a senha"
          value={cadastro.confirmeSenha}
          onChange={(e) =>
            setCadastro({ ...cadastro, confirmeSenha: e.target.value })
          }
        ></input>
        <button type="submit">
          <p>Cadastrar</p>
        </button>
      </Form>
      <Link to="/login">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

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