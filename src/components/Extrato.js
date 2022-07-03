import axios from "axios";
import React from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function Extrato() {
  const [total, setTotal] = React.useState(0);
  const [dados, setDados] = React.useState();
  const [load, setLoad] = React.useState(true);
  const { userData } = React.useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  React.useEffect(() => {
    const promise = axios.get("http://localhost:5000/extrato", config);
    promise.then((res) => {
      setTotal(res.data.total);
      setDados(res.data.userData);
      setLoad(false);
    });
  }, []);
  return (
    <Container>
      {load || dados === undefined || dados.length === 0 ? (
        <p>
          Não há registros de <br />
          entrada ou saída
        </p>
      ) : (
        <Itens>
          {dados.map((e, index) => (
            <Item onClick={() => console.log(e._id)} key={index}>
              <LeftSide>
                <h2>{e.data}</h2>
                <h3>{e.descricao}</h3>
              </LeftSide>

              <RigthSide>
                <Valor color={e.type}>
                  {e.valor.toFixed(2).replace(".", ",")}
                </Valor>
              </RigthSide>
            </Item>
          ))}
        </Itens>
      )}
      <Saldo>
        <h1>SALDO</h1>
        <Total color={total}>{total.toFixed(2).replace(".", ",")}</Total>
      </Saldo>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 326px;
  height: 445px;
  padding: 10px;
  position: relative;
  p {
    height: 445px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #868686;
  }
`;
const Itens = styled.div`
  height: 400px;
  overflow: scroll;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  margin-bottom: 15px;

  h2 {
    color: #c6c6c6;
    margin-right: 10px;
  }
  h3 {
    color: #000;
  }
`;
const LeftSide = styled.div`
  display: flex;
`;
const RigthSide = styled.div``;
const Saldo = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0px;
  left: 0;
  justify-content: space-between;
  padding: 5px;
  h1 {
    width: 95%;
    font-size: 17px;
    font-weight: 700;
    bottom: 10px;
  }
`;
const Total = styled.h2`
  font-weight: 400;
  color: ${(props) => (props.color > 0 ? "green" : "red")};
`;
const Valor = styled.h4`
  color: ${(props) => (props.color === "entrada" ? "green" : "red")};
`;
