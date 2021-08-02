import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  const { onClick, children } = props;
  return <Sbutton onClick={onClick}>{children}</Sbutton>;
};

const Sbutton = styled.button`
  margin-left: 10px;
  border-radius: 20px;
  border: none;
  padding: 5px 20px;
  background-color: white;
  color: black;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
