import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

export const Item = (props) => {
  const { text, onClick } = props;
  return (
    <SListItem>
      <p>{text}</p>
      <Button onClick={onClick}>削除</Button>
    </SListItem>
  );
};

const SListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  height: 30px;
`;
