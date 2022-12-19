import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import ConfirmDelete from "../modal/ConfirmDelete";

export function ItemType({ index, element, reloadStatement }) {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    setOpenModal(true);
  }
  return (
    <>
      <Item key={index}>
        <LeftSide>
          <h2>{element.data}</h2>
          <h3>{element.descricao}</h3>
        </LeftSide>

        <RigthSide>
          <Valor color={element.type}>
            {element.valor.toFixed(2).replace(".", ",")}
          </Valor>
          <IoClose onClick={() => handleModal(element._id)} color=" #c6c6c6" />
        </RigthSide>
      </Item>
      {openModal ? (
        <ConfirmDelete
          expenseId={element._id}
          setOpenModal={setOpenModal}
          reloadStatement={reloadStatement}
        />
      ) : (
        <></>
      )}
    </>
  );
}

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
const RigthSide = styled.div`
  display: flex;
`;
const Valor = styled.h4`
  color: ${(props) => (props.color === "entrada" ? "green" : "red")};
`;
