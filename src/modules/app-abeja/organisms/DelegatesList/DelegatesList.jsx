import React, { useState, useEffect } from 'react';
import CardL from '../Card/Large/CardL';
import DelegateService from '../../../../services/delegate/delegateService';

import './DelegatesList.scss';


const DelegatesList = ({ attribute }) => {
  let delegateService = new DelegateService();

  const [delegates, setDelegates] = useState([]);

  const setData = () => {
    setDelegates([]);
    delegateService.getAll(attribute).then(delegatesList => {
      setDelegates(delegatesList.data);
    });
  };

  useEffect(() => {
    setData();
  }, [ attribute ]);

  const renderDelegateData = delegate => {
    return (
      <React.Fragment>
        <CardL
          key={`${delegate.id}`}
          className="delegates-list__card"
          img={delegate.picture}
          title={`${delegate.name}`}
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
      { delegates.slice(0, 10).map( delegate => { 
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