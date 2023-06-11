import styled from "styled-components";
import { Link } from "react-router-dom";

 const Container = styled.div`
  display: flex;
  justify-content:center;
`;

 const SmallCard = styled(Link)`
  display:flex;
  align-items:center;
  justify-content: center;
  margin: 15px;
  max-width:200px;
  min-width:200px;
  height:200px;
  border:var(--border);
  text-align:center;
  border-radius:4px;
  transition: box-shadow 0.3s ease;
  :hover{
  box-shadow: var(--shadow);
  cursor:pointer;
  }
  text-decoration:none;
 `
 export const ComponentsWrapper = styled.div`
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-y:scroll;
  height:calc(100vh - var(--navbar-height ) - 25px);
  display: flex;
  justify-content:center;
`;
// export const Title = styled.div`
//   border-bottom: var(--border);
//   padding: 15px;

// `;
export const Button = styled.div`
  background:var(--primaryBgColor);
  padding: 20px 20px !important;
  color: white;
  width: 100px;
  font-weight:600;
  border-radius: 15px;
  margin-top; 50px !important;
`;
 

export { Container, SmallCard, };
