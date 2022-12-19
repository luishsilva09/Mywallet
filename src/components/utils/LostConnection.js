import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";

export function LostConnection() {
  const navigate = useNavigate();
  function redirect() {
    navigate("/");
  }
  return (
    <ContainerLost onClick={() => redirect()}>
      <BiError size={200} color={"#fff"} />
      <Link to="/">Conexão pedida, faça login novamente </Link>
    </ContainerLost>
  );
}

const ContainerLost = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }
`;
