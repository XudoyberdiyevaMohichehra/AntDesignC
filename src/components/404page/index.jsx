import React from "react";
import { Container, Img } from "./style";
import page from '../../assets/imgs/error.jpg'

export const Page = () => {
  return (
    <Container>
      <Img src={page} alt="rasm" />
    </Container>
  );
};

export default Page;
