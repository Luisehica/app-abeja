import React from 'react';

import { Container, Header, Image } from 'semantic-ui-react';

import Menu from '../organisms/Menu/Menu';
import MenuSearch from '../organisms/Menu/SearchMenu'
import Cards from '../organisms/Card/Cards';
import ItemSimple from '../molecules/Item/Item.jsx';
import ItemExampleFloated from '../organisms/ItemFloated/ItemFloated';
import Top10 from '../organisms/Top10/Top10';

const Home = () => {
  const src1 = 'https://picsum.photos/1000/250'
  return (
    <div className="App">
      <Container>
        <Menu />
        <Image src={src1} size='massive' centered fluid />
        <Header as='h3'>Ciudadanos informados generando cambio</Header>
        <Header as='h5'>Conocer e informarte sobre el desempeño de tus congresistas puede parecer dificil. Tranquilo, nosotros te lo facilitamos.</Header>
        <Header as='h2'>Top 10 Indicadores</Header>

        <ItemExampleFloated />
        <MenuSearch />

        <br />

        <Cards
          category="Representates a la Camara"
          complement="del Departamento de "
          state="Cundinamarca"
        />
        <ItemSimple
          imagen="https://picsum.photos/200/100"
          titulo="Quienes somos"
          descripcion="Somos un equipo de voluntarios que tiene como objetivo empoderar a la ciudadanía con herramientas e información sobre nuestros funcionarios públicos."

        />
        <br />

        <br />
        <Top10
          categoria="Top 10 Asistencias"
        />
        <Top10
          categoria="Top 10 Indicador X"
        />
        <Top10
          categoria="Top 10 Indicador Z"
        />
      </Container>
    </div >
  );
}

export default Home;