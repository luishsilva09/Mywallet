import React from "react";
import styled from "styled-components";
import Statement from "./statement/Statement";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LostConnection } from "./utils/LostConnection";

export default function Home() {
  const navigate = useNavigate();
  const { userData } = React.useContext(UserContext);

  function entrada() {
    navigate("/entrada");
  }
  function expense() {
    navigate("/expense");
  }

  return (
    <>
      {userData ? (
        <>
          <Container>
            <Topo>
              <p>Olá, {userData.user.name}</p>
              <IoExitOutline onClick={() => navigate("/")} />
            </Topo>
            <Statement />

            <Botton>
              <Add onClick={() => entrada()}>
                <AiOutlinePlusCircle size={20} color="#fff" />
                <h2>
                  Nova <br /> entrada
                </h2>
              </Add>
              <Add onClick={() => expense()}>
                <AiOutlineMinusCircle size={20} color="#fff" />
                <h2>
                  Nova <br /> saída
                </h2>
              </Add>
            </Botton>
          </Container>
        </>
      ) : (
        <LostConnection />
      )}
    </>
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
const Add = styled.div`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  padding: 10px;
  position: relative;

  &:hover {
    cursor: pointer;
    filter: brightness(130%);
  }
  h2 {
    color: #fff;
    font-weight: 700;
    font-size: 17px;
    position: absolute;
    bottom: 10px;
  }
`;
const Botton = styled.div`
  display: flex;
  width: 326px;
  justify-content: space-between;
  margin-top: 15px;
`;
