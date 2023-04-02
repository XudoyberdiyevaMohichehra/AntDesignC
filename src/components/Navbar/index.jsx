import React from "react";
import { navbar } from "../../utils/navbar";
import antlogo from '../../assets/icons/antlogo.svg'
import { Contact, Container,LogoWrap,Logo, Link, User, Wrapper } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <LogoWrap>
      <Logo src={antlogo} alt="" />
      <User path="/components">Antd Library</User>
      </LogoWrap>
      <Wrapper>
        {navbar.map((value) => (
          <Link key={value.id} to={value.path}>
            {value.title}
          </Link>
        ))}
        <Contact>
          <Contact.User>Xudoyberdiyeva Mohichehra</Contact.User>
          <a href="https://t.me/Mohichehra0501">
            <Contact.Telegram />
          </a>
          <a href="https://youtube.com/c/webbrainacademy">
            <Contact.Youtube />
          </a>
          <a href="https://github.com/XudoyberdiyevaMohichehra">
            <Contact.Git />
          </a>
        </Contact>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
