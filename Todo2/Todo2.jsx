import React, { useCallback, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import styled from "styled-components";

const StyledWrapper = styled.div`
  text-align: center;
  color: rgb(231, 231, 231);
  background-color: black;
  height: 100vh
`;

export default function Todo2() {
  const [todos, setTodos] = useState([]);
  const handleAdd = useCallback((todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, []);
  const handleRemove = useCallback(
    (removeItem) => {
      setTodos((prevTodos) => {
        return prevTodos.filter((item) => item.id !== removeItem);
      });
    },
    [setTodos]
  );
  const handleDone = useCallback(
    (doneItem) => {
      setTodos((prevTodos) => {
        return prevTodos.map((item) => {
          if (item.id === doneItem) item.isDone = true;

          return item;
        });
      });
    },
    [setTodos]
  );

  return (
    <StyledWrapper>
      <h1>My Todo list</h1>
      <TodoInput handleAdd={handleAdd} />
      <hr style={{ borderBottomWidth: "0.1px", borderColor: "grey" }} />
      <TodoList
        todos={todos}
        handleRemove={handleRemove}
        handleDone={handleDone}
      />
    </StyledWrapper>
  );
}
