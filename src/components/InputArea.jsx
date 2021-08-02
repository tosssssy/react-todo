import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const InputArea = (props) => {
  const { onClick } = props;
  return (
    <>
      <SContainer>
        <input id="input_area" type="text" placeholder="TODOを入力" />
        <Button onClick={onClick}>追加</Button>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  background-color: aqua;
  padding: 8px;
  border-radius: 30px;
  width: 300px;
`;
