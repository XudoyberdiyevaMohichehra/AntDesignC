import React from "react";
import tg  from "../../assets/icons/tg.svg";
import yt  from "../../assets/icons/yt.svg";
import copy  from "../../assets/icons/copy.svg";
import code  from "../../assets/icons/code.svg";
import { Container, Header, Body, Footer, Img, A } from "./style";

export const Card = ({type='unknown', children, desc}) => {
  return (
    <Container>
      <Header>{children}</Header>
      <Body>
        <legend  style={{
              fontSize: "24px",
              fontWeight: "600",
            }}>{type}</legend>
        {desc}
      </Body>
      <Footer>
        <A href="https://t.me/Mohichehra0501">
        <Img  src={tg} alt="" />
        </A>
        <A href="#">
        <Img src={yt} alt="" />
        </A>
        <A href="#">
        <Img  src={copy} alt="" />
        </A>
        <A href="#">
        <Img src={code} alt="" />
        </A>
      </Footer>
    </Container>
  );
};

export default Card;
