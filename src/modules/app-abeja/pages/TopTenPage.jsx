import React, { useEffect, useState } from 'react';

import Layout from '../../../components/templates/MainLayout/MainLayout';
import DelegatesCardList from '../organisms/DelegatesCardList/DelegatesCardList';

const TopTenPage = ( props ) => {
  const [title, setTitle] = useState('XXX');
  const [attribute, setAttribute] = useState(null);
  const [value, setValue] = useState(null);

  const updateTitle = () => {
    let newTitle = '';
    setAttribute(props.match.params.attribute);
    setValue(props.match.params.value);
    switch (props.match.params.attribute) {
      case "assist":
        newTitle = props.match.params.value === 'best' ? 'Mejores asistencias' : 'Peores asistencias';
        break;
      default:
        
    }    
    setTitle(`Top 10 - ${newTitle}`);
  }

  useEffect(() => {
    updateTitle();
  }, [ props.match.params.attribute, props.match.params.value ]);


  return (
    <Layout>
        <h1>{ title }</h1>
        <DelegatesCardList attribute={value}/>
    </Layout>
  );
}

export default TopTenPage;