import React from "react";
import { Outlet } from "react-router-dom";
import { Container, ComponentsWrapper, SmallCard, Title, Button } from "./style";
import {sidebar} from '../../utils/sidebar'

export const Components = () => {
  return (
    <Container>
    <Outlet />

    <ComponentsWrapper>
      {sidebar.map((v) => (
        <SmallCard key={v.id} to={v.path}>
          <Button>{v.title}</Button>
        </SmallCard>
      ))}
    </ComponentsWrapper>
  </Container>
  );
};

export default Components;
