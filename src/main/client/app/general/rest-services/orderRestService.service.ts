import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig;
import {Order} from "../interfaces/order.interface";
export class OrderRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService) {
    this.restServiceUrl = 'http://127.0.0.1:4567';
  }

  getOrders(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/orders/')
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  getOrder(id: number): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/order?id='+id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  save(order: Order): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.post(this.restServiceUrl + '/order/', order)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  delete(id:number): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.get(this.restServiceUrl + '/deleteOrder?id='+id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

}
