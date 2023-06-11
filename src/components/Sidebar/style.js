import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 300px;
  width: 100%;
  box-shadow: var(--shadow);
  padding: 0 25px;
  gap: 20px;
  padding-top: 25px;
  .active {
    opacity: 1;
    font-weight: 900;
    color: #08080b;
  }
  overflow: scroll;
`;
const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - var(--navbar-height));
`;
const Body = styled.div`
  margin: 25px;
  padding: 25px;
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  overflow-y: auto;
`;

const Link = styled(NavLink)`
  display:flex;
  color: var(--color);
  text-decoration: none;
  font-size: 16px;
  width: fit-content;
  opacity: 0.7;
  gap:10px;
  :hover {
    opacity: 1;
  }
  :focus {
    padding:8px 55px;
    border-left:2px solid var(--greenColor);
    border-right:2px solid var(--greenColor);
    color:var(--greenColor);
    transition: padding 0.5s ease ;
  }
  :focus Span {
   display:none;
  }
  border:var(--border);
  background:var(--primaryColor);
  padding:10px 55px 10px 25px;
  border-radius:15px;
`;
const Span = styled.span`
  color:var(--greenColor);
  font-weight:800;
`;

export {Wrapper, Container, Body, Link, Span,  };
