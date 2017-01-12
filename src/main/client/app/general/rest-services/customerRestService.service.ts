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
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  getCustomer(id: number): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/customers/' + id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  addCustomer(customer: Customer): IPromise<any> {
    return this.$http.post(this.restServiceUrl + '/customers/', customer)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  editCustomer(id: number, customer: Customer): IPromise<any> {
    return this.$http.put(this.restServiceUrl + '/customers/' + id, customer)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  deleteCustomer(id: number): IPromise<any> {
    return this.$http.delete(this.restServiceUrl + '/customers/' + id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

}
