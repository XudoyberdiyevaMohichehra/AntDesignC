import styled from "styled-components";
import { Link } from "react-router-dom";

 const Container = styled.div`
  display: flex;
`;

 const SmallCard = styled(Link)`
  margin: 15px;
  // padding: 25px;
  max-width:200px;
  min-width:200px;
  height:250px;
  border:var(--border);
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
  height:calc(100vh - var(--navbar-height ) - 25px)
`;
export const Title = styled.div`
  border-bottom: var(--border);
  padding: 15px;

`;
 

export { Container, SmallCard, };
