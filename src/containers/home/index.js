import React from "react";

import H1 from "../../components/title";
import Button from "../../components/button"
import Input from "../../components/input"
import Label from "../../components/label"
import RegisterContainer from "../../components/containeritens";

import { Container, RegisterLogoImg, } from "./styles";

import RegisterLogo from "../../assets/register-logo.svg";
import Arrow from "../../assets/arrow.svg";

const Home = () => {
  return (

    <Container>
      <RegisterLogoImg src={RegisterLogo} alt="register-logo"/>
        <RegisterContainer>
          <H1>Olá!</H1>
          <Label>Nome:</Label>
          <Input></Input>
          <Label>Idade:</Label>
          <Input></Input>
          <Button>Cadastrar<img src={Arrow} alt="arrow-img"/></Button>
        </RegisterContainer>
    </Container>
  )
};

export default Home;
