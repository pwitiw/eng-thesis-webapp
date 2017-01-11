import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig;
import {Customer} from "../interfaces/customer.interface";
export class CustomerRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService) {
    this.restServiceUrl = 'http://localhost:8080';
  }

  getCustomers(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/customers')
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

}
