import axios from "axios";
import { enviroment } from '../common/enviroment';

export default class DelegateService {
        
    apiEndpoint = enviroment.API_URL;

    getAll = () => {
        return axios.get(
        `${this.apiEndpoint}${enviroment.DELEGATES_URL}`
    );
  };
}
