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

export const RegisterLogoImg = styled.img`
margin-top: 30px;
`

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
outline: none;
padding: 25px;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;

`