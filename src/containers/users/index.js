import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Container, UsersLogoImg, User } from "./styles";

import ContainerItens from "../../components/containeritens";
import H1 from "../../components/title";
import Button from "../../components/button";

import UsersLogo from "../../assets/users-logo.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsers(){
      const {data: newUsers} = await Axios.get('http://localhost:5000/users/');
      setUsers(newUsers);

      console.log(newUsers)
    
    }
    fetchUsers();
  }, [])


  async function deleteUser(userId) {

    await Axios.delete(`http://localhost:5000/users/${userId}`);

    const newUsers = users.filter((user) => user.id === userId);

    setUsers(newUsers);

  }

  return (
    <Container>
        <UsersLogoImg src={UsersLogo} alt="users-img"/>
      <ContainerItens>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="trash-img"/></button>
            </User>
          ))}
        </ul>
        <Button isUsers={true}><img src={Arrow} alt="arrow-img"/>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
