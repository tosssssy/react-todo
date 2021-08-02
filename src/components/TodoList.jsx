import React from "react";
import { Item } from "./Item";
import styled from "styled-components";

export const TodoList = (props) => {
  const { todoList, onClick } = props;
  return (
    <>
      <STodoContainer>
        <STitle>TODOリスト</STitle>
        <ul>
          {todoList.map((todoText) => {
            return (
              <li key={todoText}>
                <Item text={todoText} onClick={() => onClick(todoText)} />
              </li>
            );
          })}
        </ul>
      </STodoContainer>
    </>
  );
};

const STodoContainer = styled.div`
  background-color: antiquewhite;
  padding: 8px;
  margin-top: 8px;
  border-radius: 30px;
  width: 300px;
`;

const STitle = styled.p`
  text-align: center;
  margin-top: 4px;
`;
