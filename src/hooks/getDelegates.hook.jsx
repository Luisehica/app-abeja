import { useEffect, useState } from "react";
import DelegateService from "../services/delegate/delegateService";

let delegateService = new DelegateService();

const GetDeletagesHook = (attribute) => {

  const [delegates, setDelegates] = useState([]);

  const setData = () => {
    setDelegates([]);
    delegateService.getAll(attribute).then(delegatesList => {
      setDelegates(delegatesList.data);
    });
  };

  useEffect(() => {
    setData();
  }, [attribute]);

  return delegates;
}

export default GetDeletagesHook;