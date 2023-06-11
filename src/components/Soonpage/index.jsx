import React from "react";
import { Container, Img } from "./style";
import soon from '../../assets/imgs/coming-soon.jpg'

export const Soon = () => {
  return (
    <Container>
      <Img src={soon} alt="rasm" />
    </Container>
  );
};

export default Soon;