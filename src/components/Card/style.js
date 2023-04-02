import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  border: var(--border);
  transition: box-shadow 0.3s ease;
  :hover{
  box-shadow: var(--shadow);
  cursor:pointer;
  }
  
`;
const Header = styled.div`
  display: flex;
  gap:20px;
  flex-wrap: wrap;
  padding: 20px;
`;
const Body = styled.fieldset`
  border: var(--border); 
  border-left: 0;
  border-right: 0;
  padding:10px 20px;
`;
const Footer = styled.div`
  bordertop-: var(--border); 
  padding: 5px;
  display:flex;
  justify-content:center;
`;
const A = styled.a`
`;
const Img = styled.img`
  padding: 5px;
  width:35px;
  opacity:0.7;
`;

export { Container, Header, Body, Footer, Img, A };
