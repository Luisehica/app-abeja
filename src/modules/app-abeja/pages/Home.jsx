import React from 'react';

import Cards from '../organisms/Card/Cards';
import ItemSimple from '../molecules/Item/Item.jsx';
import ItemExampleFloated from '../organisms/ItemFloated/ItemFloated';
import Layout from '../../../components/templates/MainLayout/MainLayout';

const Home = () => {
  return (
    <Layout>        
        <ItemExampleFloated />
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
    </Layout>
  );
}

export default Home;