import React, { useState, useEffect } from 'react';
import CardL from '../Card/Large/CardL';
import DelegateService from '../../../../services/delegate/delegateService';

import './DelegatesList.scss';


const DelegatesList = (attribute) => {
  let delegateService = new DelegateService();

  const [delegates, setDelegates] = useState([]);

  const setInitialData = () => {
    delegateService.getAll().then(delegatesList => {
      console.log({delegatesList});
      setDelegates(delegatesList.data);
    });
  };

  useEffect(() => {
    setInitialData();
  }, []);

  const renderDelegateData = delegate => {
    console.log(delegate);
    return (
      <React.Fragment>
        <CardL
          key={delegate.id}
          img='https://picsum.photos/250/250'
          title={`${delegate.nombre} ${delegate.apellido}`}
          subtitle={delegate.partido_politico_actual}
          description=""
          attendance={delegate.periodos[0]?.asistencias}
          excused_absenteeism={delegate.periodos[0]?.inasistencias}
          unexcused_absenteeism={delegate.periodos[0]?.inasistencias_justificadas}
          icon="clock"
          icon2="clock outline"
        />
      </React.Fragment>
    );
  };

  return (
    <div className="delegates-list">
      { delegates.map( delegate => { 
        return(
          <>
          { renderDelegateData(delegate) }
          </>
        );
      })}
    </div>
  );
}

export default DelegatesList;