import styled from "styled-components";

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 14px;
width: 342px;
height: 74px;
background: ${props => props.isUsers ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
border-radius: 14px;
border: ${props => props.isUsers ? '1px solid #FFFFFF' : 'none'};
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
margin-top: 120px;
cursor: pointer;

img {
    transform: ${props => props.isUsers && 'rotate(180deg)'};
}

&:hover {
    opacity: 0.5;
}

`