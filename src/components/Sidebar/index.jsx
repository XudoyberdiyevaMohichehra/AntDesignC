import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";
import { Body, Container, Link, Wrapper, Span,  } from "./style";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Container>
        {sidebar.map((value) => (
          <Link key={value.id} to={value.path}>
            <Span>{value.icon} </Span>{value.title}
          </Link>
        ))}
      </Container>
      <Body style={location.pathname === "/components" ? { display: "none" } : null}>
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Sidebar;


