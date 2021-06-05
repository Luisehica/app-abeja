import React from 'react';

import ItemExampleFloated from '../organisms/ItemFloated/ItemFloated';
import Layout from '../../../components/templates/MainLayout/MainLayout';
import DelegatesItemList from '../organisms/DelegatesItemList/DelegatesItemList';

const Home = () => {
  return (
    <Layout>        
        <ItemExampleFloated />

        <h2 className="h2">Congresistas</h2>

        <DelegatesItemList/>

    </Layout>
  );
}

export default Home;