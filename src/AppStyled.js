import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("./src/assets/background-delivery.jpg");
  background-size: cover;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 80px;

  a {
    display: flex;
    font-size: 40px;
    padding: 10px;
    border-radius: 5px;
    color: white;
    margin-bottom: 15px;
    transition: 0.5s ease-in-out;

    &:hover {
      background: blue;
    }
  }
`;
