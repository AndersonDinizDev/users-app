import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${Background});
  background-size: cover;
  height: 100vh;
`;

export const UsersLogoImg = styled.img`
  margin-top: 30px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  outline: none;
  margin-top: 5px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
