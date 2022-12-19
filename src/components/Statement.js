import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { TailSpin } from "react-loader-spinner";
import api from "./service/api";
import { ItemType } from "./ItemType";

export default function Statement() {
  const [total, setTotal] = useState(0);
  const [statementData, setStatementData] = useState();
  const [load, setLoad] = useState(true);
  const { userData } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  useEffect(() => {
    reloadStatement();
  }, []);

  async function reloadStatement() {
    await api.get("/statement", config).then((res) => {
      setTotal(res.data.total);
      setStatementData(res.data.userData);
      setLoad(false);
    });
  }

  function loading() {
    if (load === true) {
      return (
        <Loading>
          <TailSpin color="#8c11be" />
        </Loading>
      );
    } else {
      return (
        <p>
          Não há registros de <br />
          entrada ou saída
        </p>
      );
    }
  }
  return (
    <>
      <Container>
        {load || statementData === undefined || statementData.length === 0 ? (
          loading()
        ) : (
          <Itens>
            {statementData.map((e, index) => (
              <ItemType
                index={index}
                element={e}
                reloadStatement={reloadStatement}
              />
            ))}
          </Itens>
        )}
        <Saldo>
          <h1>SALDO</h1>
          <Total color={total}>{total.toFixed(2).replace(".", ",")}</Total>
        </Saldo>
      </Container>
    </>
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
const Loading = styled.div`
  height: 445px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Itens = styled.div`
  height: 400px;
  overflow: scroll;
`;
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
