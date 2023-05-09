import React, { useRef, useState } from "react";
import Axios from "axios";

import H1 from "../../components/title";
import Button from "../../components/button"
import Label from "../../components/label"
import RegisterContainer from "../../components/containeritens";

import { Container, RegisterLogoImg, Input, } from "./styles";

import RegisterLogo from "../../assets/register-logo.svg";
import Arrow from "../../assets/arrow.svg";

const Home = () => {
  
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {


    const {data: newUser} = await Axios.post("http://localhost:5000/users", { name: inputName.current.value, age: inputAge.current.value,} );

    setUsers([...users, newUser])

    console.log(newUser)
  }

  

  return (

    <Container>
      <RegisterLogoImg src={RegisterLogo} alt="register-logo"/>
        <RegisterContainer>
          <H1>Olá!</H1>
          <Label>Nome:</Label>
          <Input ref={inputName}/>
          <Label>Idade:</Label>
          <Input ref={inputAge}/>
          <Button onClick={addNewUser}>Cadastrar<img src={Arrow} alt="arrow-img"/></Button>
        </RegisterContainer>
    </Container>
  )
};

export default Home;
