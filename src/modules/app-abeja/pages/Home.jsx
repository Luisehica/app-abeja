import React from 'react';

import 'semantic-ui-css/semantic.min.css'
import { Divider, Header } from 'semantic-ui-react';

import Menu from '../../../modules/app-abeja/organisms/Menu/Menu';
import MenuSearch from '../../../modules/app-abeja/organisms/Menu/SearchMenu'
import Cards from '../../../modules/app-abeja/organisms/Card/Cards';
import Accordion from '../../../modules/app-abeja/organisms/Accordion/Accordion';
import Logo from '../../../modules/app-abeja/atoms/logo/LogoFluid';

const Home = () => {
  return (
    <div className="App">
      <Menu />
      <Header as='h3'>Ciudadanos informados generando cambio</Header>
      <Header as='h5'>Conocer e informarte sobre el desempeño de tus congresistas puede parecer dificil. Tranquilo, nosotros te lo facilitamos.</Header>
      <Header as='h4'>Ver promedio de asistencias</Header>
      <MenuSearch />
      <Cards
        category="Representates a la Camara"
        state="Cundinamarca"
      />
      <Divider />
      <Logo />
      <Accordion />

    </div >
  );
}

export default Home;