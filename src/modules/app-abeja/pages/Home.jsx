import React from 'react';

import Cards from '../organisms/Card/Cards';
import ItemExampleFloated from '../organisms/ItemFloated/ItemFloated';
import Layout from '../../../components/templates/MainLayout/MainLayout';

const Home = () => {
  return (
    <Layout>        
        <ItemExampleFloated />
    </Layout>
  );
}

export default Home;