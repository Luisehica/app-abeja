import axios from "axios";
import { environment } from '../../common/environment';

export default class DelegateService {
        
    apiEndpoint = environment.API_URL;

    getAll = () => {
        return axios.get(
        `${this.apiEndpoint}${environment.DELEGATES_URL}`
    );
  };
}
