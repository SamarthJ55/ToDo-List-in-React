import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: rgb(26, 25, 25);
  padding: 10px;
  border: 1px solid transparent;
  color: rgb(231, 231, 231);
  font-size: 16px;
`;
const StyledButton = styled.button`
  background-color: rgb(26, 25, 25);
  padding: 10px;
  border: 1px solid transparent;
  color: rgb(231, 231, 231);
  font-size: 16px;
  height: 40px;
  border-left: 0.5px solid gray;
  cursor: pointer;
  &:focus, :hover {
    background-color: rgb(46, 45, 45);
    border: 1px solid rgb(78, 78, 78);
    outline: 0;
  }
`;
export const TodoInput = React.memo(({ handleAdd }) => {
  const [todo, setTodo] = useState("");
  const onAdd = () => {
    handleAdd({
      todo,
      id: Date.now(),
      isDone: false
    });
    setTodo("");
  };

  return (
    <>
      <StyledInput
        type="text"
        value={todo}
        placeholder="Add Item"
        onChange={(e) => setTodo(e.target.value)}
      />
      <StyledButton onClick={onAdd}>{"Add Item"}</StyledButton>
    </>
  );
});
