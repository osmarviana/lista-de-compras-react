import React from "react";
import Logo from "../../assets/img/logo.png";
import { ListContainer } from "../../components/list-container/ListContainer";
import { styled } from "styled-components";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Header>
          <img src={Logo} alt="Logo Lista de Compras" />
          <h1>Lista de Compras</h1>
        </Header>
        <ListContainer />
      </Container>
    </>
  );
};

const Container = styled.main`
  padding: 20px 10px;
  @media (max-width: 465px) {
    padding: 20px 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100px;
    margin-right: 15px;
  }
  & h1 {
    font-size: 42px;
    @media (max-width: 465px) {
      font-size: 32px;
    }
    @media (max-width: 375px) {
      font-size: 26px;
    }
    @media (max-width: 320px) {
      font-size: 22px;
    }
  }
`;
