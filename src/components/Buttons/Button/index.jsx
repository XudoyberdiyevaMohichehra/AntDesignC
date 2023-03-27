import React from "react";
import { Container } from "./style";

export const NormalButton = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default NormalButton;
