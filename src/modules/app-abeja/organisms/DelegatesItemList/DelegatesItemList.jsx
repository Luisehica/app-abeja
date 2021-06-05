import React from 'react';
import { Item } from 'semantic-ui-react';

import './DelegatesItemList.scss';
import GetDeletagesHook from '../../../../hooks/getDelegates.hook';
import DelegateItem from '../../molecules/DelegateItem/DelegateItem';


const DelegatesItemList = ({ attribute }) => {
  
  const delegates = GetDeletagesHook(attribute);

  const renderDelegateData = (delegate) => (
    <React.Fragment>
      <DelegateItem
        key={`${delegate.id}`}
        className="delegates-list__item"
        img={delegate.picture}
        name={`${delegate.name}`}
        politicalParty={delegate.partido_politico_actual}
        attendance={delegate.periodos[0]?.asistencias}
        excused_absenteeism={delegate.periodos[0]?.inasistencias}
        unexcused_absenteeism={delegate.periodos[0]?.inasistencias_justificadas}
      />
    </React.Fragment>
  );

  return (
    <div className="delegates-item-list">
      { delegates.map( delegate => { 
        return(
          <Item.Group divided>
            { renderDelegateData(delegate) }
          </Item.Group>
        );
      })}
    </div>
  );
}

export default DelegatesItemList;
