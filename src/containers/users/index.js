import React from "react";

import { Container, UsersLogoImg } from "./styles";

import ContainerItens from "../../components/containeritens";
import H1 from "../../components/title";
import Button from "../../components/button";

import UsersLogo from "../../assets/users-logo.svg";
import Arrow from "../../assets/arrow.svg";

const Users = () => {
  return (
    <Container>
        <UsersLogoImg src={UsersLogo} alt="users-img"/>
      <ContainerItens>
        <H1>Usuários</H1>
        <Button isUsers={true}><img src={Arrow} alt="arrow-img"/>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
