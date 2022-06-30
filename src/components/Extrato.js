import axios from "axios";
import React from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function Extrato() {
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
      setDados(res.data);
      setLoad(false);
    });
  }, []);

  return (
    <Container>
      {load ? (
        <p>
          Não há registros de <br />
          entrada ou saída
        </p>
      ) : (
        dados.map((e) => (
          <Item>
            <h2>{e.data}</h2>
            <h3>{e.descricao}</h3>
            <h4 color={e.type}>{e.valor}</h4>
          </Item>
        ))
      )}
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

const Item = styled.div`
  display: flex;
  font-size: 16px;
  width: 100%;

  h2 {
    color: #c6c6c6;
  }
  h3 {
    color: #000;
  }
  h4 {
    color: ${(props) => (props.color === "entrada" ? "red" : "green")};
  }
`;
