import React from "react";
import styled from "styled-components";

const StyledDeleteButton = styled.button`
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
  color: rgb(251, 130, 130);
  width: 70px;
`;
const StyledDoneButton = styled.button`
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
  color: rgb(110, 251, 145);
  width: 70px;
`;

const StyledItem = styled.div`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "")};
  text-decoration-color: black;
  color: rgb(231, 231, 231);
  padding: 5px;
  transition: all 0.3s ease-out;
`;
const StyledList = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  width: 500px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(26, 25, 25);
  border-left: 2px solid yellow;
`;

export const TodoList = React.memo(({ todos, handleRemove, handleDone }) => {
  if (todos.length === 0) return "Start adding yout todo items!";

  return (
    <StyledList>
      {todos.map((todo) => {
        return (
          <StyledListItem key={todo.id}>
            <StyledItem isDone={todo.isDone}>
              {todo.todo}
            </StyledItem>
            <div>
              <StyledDoneButton onClick={() => handleDone(todo.id)}>
                Done
              </StyledDoneButton>
              <StyledDeleteButton onClick={() => handleRemove(todo.id)}>
                Delete
              </StyledDeleteButton>
            </div>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
});
