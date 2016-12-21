import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig
import {Worker} from "../interfaces/worker.interface";
import {Order} from "../interfaces/order.interface";
export class WorkerRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService) {
    this.restServiceUrl = 'http://127.0.0.1:4567';
  }

  getWorkers(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/workers/')
      .then((response: ng.IHttpPromiseCallbackArg<Worker[]>)=> {
        return response.data;
      })
  }

  getWorker(id: number): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/order?id='+id)
      .then((response: ng.IHttpPromiseCallbackArg<Order[]>)=> {
        return response.data;
      })
  }

  save(worker: Worker): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.post(this.restServiceUrl + '/order/', worker)
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
