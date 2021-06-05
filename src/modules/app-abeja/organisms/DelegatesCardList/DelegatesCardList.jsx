import React from 'react';
import CardL from '../Card/Medium/CardM';

import './DelegatesCardList.scss';
import GetDeletagesHook from '../../../../hooks/getDelegates.hook';


const DelegatesCardList = ({ attribute }) => {

  const delegates = GetDeletagesHook(attribute);

  const renderDelegateData = (delegate) => {
    return (
      <React.Fragment>
        <CardL
          key={`${delegate.id}`}
          className="delegates-card-list__card"
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
    <div className="delegates-card-list">
      { delegates.map(delegate => {
        return (
          <>
            { renderDelegateData(delegate)}
          </>
        );
      })}
    </div>
  );
}

export default DelegatesCardList;