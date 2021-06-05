import axios from "axios";
import { environment } from '../../common/environment';

export default class DelegateService {
        
  apiEndpoint = environment.API_URL;

  getAll = (attribute = 'All') => {
    attribute = attribute === 'best' ? attribute : 'worse';
    
    return axios.get(
    `${this.apiEndpoint}${environment.DELEGATES_URL}?TopTen=${attribute}`
    );
  };
}
