import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig;
import {Order} from "../interfaces/order.interface";
export class OrderRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService) {
    this.restServiceUrl = 'http://localhost:8080';
  }

  getOrders(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/orders/')
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  getOrder(id: number): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/orders/'+id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  edit(id: number, order: Order): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.put(this.restServiceUrl + '/orders/' + id, order)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  delete(id:number): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.delete(this.restServiceUrl + '/orders/'+id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  changeType(id: number): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.put(this.restServiceUrl + '/orders/'+id+"/change-status", "")
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }


  getComponent(id: number): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/orders/'+id + "/components")
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  synchronize(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/synchronize')
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }
}
