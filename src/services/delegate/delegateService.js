import axios from "axios";
import { environment } from '../../common/environment';

export default class DelegateService {
        
    apiEndpoint = environment.API_URL;

    getAll = () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    
      return axios.get(
      `${this.apiEndpoint}${environment.DELEGATES_URL}`,
      config
    );
  };
}
