import React, { useState, useEffect } from 'react';

import DelegateService from "../services/delegateService";


const DelegatesList = () => {
  let delegateService = new DelegateService();

  const [delegates, setDelegates] = useState([]);

  const setInitialData = () => {
    delegateService.getAll().then(delegatesList => {
      setDelegates(delegatesList);
    });
  };

  useEffect(() => {
    setInitialData();
  }, []);

  const renderDelegateData = delegate => {
    return (
      <React.Fragment>
        <h1>delegate.name</h1>
        <p>delegate.id</p>
      </React.Fragment>
    );
  };

  return (
    <div>
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