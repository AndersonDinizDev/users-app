import styled from "styled-components";
import Background from "../../assets/background.svg"

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-image: url(${Background});
background-size: cover;
height: 100vh;
`

export const UsersLogoImg = styled.img`
margin-top: 30px;
`