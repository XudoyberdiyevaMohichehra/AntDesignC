import React from "react";
// import { useLocation } from "react-router-dom";
import { Container } from "./style";

const NormalInput = ({ placeholder, ...rest }) => {
  return <Container placeholder={placeholder} {...rest}></Container>;
};

export default NormalInput;

