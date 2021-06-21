import React from 'react';

import Layout from '../../../components/templates/MainLayout/MainLayout';
import DelegatesItemList from '../organisms/DelegatesItemList/DelegatesItemList';

const Home = () => {
  return (
    <Layout>
        <h2 className="h2">Congresistas</h2>
        <DelegatesItemList/>
    </Layout>
  );
}

export default Home;