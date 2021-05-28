import React, { useEffect, useState } from 'react';

import Layout from '../../../components/templates/MainLayout/MainLayout';
import DelegatesList from '../organisms/DelegatesList/DelegatesList';

const TopTenPage = ( props ) => {
  const [title, setTitle] = useState('XXX');
  const [attribute, setAttribute] = useState(null);

  const updateTitle = () => {
    let newTitle = '';
    setAttribute(props.match.params.attribute);
    switch (attribute) {
      case "assist":
        newTitle = 'Asistencias'
        break;
      case "indicatorX":
        newTitle = 'Indicador X';
        break;
      case "indicatorZ":
        newTitle = 'Indicador Z';
        break;
      default:
        
    }    
    setTitle(`Top 10 ${newTitle}`);
  }

  useEffect(() => {
    updateTitle();
  }, []);


  return (
    <Layout>
        <h1>{ title }</h1>

        <DelegatesList>

        </DelegatesList>
    </Layout>
  );
}

export default TopTenPage;