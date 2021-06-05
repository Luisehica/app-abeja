import React from "react";

import { Container, Header } from 'semantic-ui-react';

import Hero from "../../atoms/Hero/Hero";
import Footer from "../../organisms/Footer/Footer";
import Menu from '../../organisms/Menu/Menu';
import MenuSearch from '../../organisms/Menu/SearchMenu';

import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Menu />
      <Container className="main-layout__container">
        <Hero></Hero>
        <Header as='h2'>Top 10 Indicadores</Header>
        <MenuSearch />
        <main>
          { children }
        </main>
      </Container>
    </React.Fragment>
  );
};

export default MainLayout;
