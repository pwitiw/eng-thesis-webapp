import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig
import {Worker} from "../interfaces/worker.interface";
import {Order} from "../interfaces/order.interface";
export class WorkerRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService, private cfpLoadingBar: any) {
    this.restServiceUrl = 'http://localhost:8080';
  }

  getPositions(): IPromise<any> {
    this.cfpLoadingBar.start();
    return this.$http.get(this.restServiceUrl + '/workers/positions')
      .then((response: ng.IHttpPromiseCallbackArg<Worker[]>)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  getWorkers(): IPromise<any> {
    this.cfpLoadingBar.start();
    return this.$http.get(this.restServiceUrl + '/workers/')
      .then((response: ng.IHttpPromiseCallbackArg<Worker[]>)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  getWorker(id: number): IPromise<any> {
    this.cfpLoadingBar.start();
    return this.$http.get(this.restServiceUrl + '/workers/'+id)
      .then((response: ng.IHttpPromiseCallbackArg<Order[]>)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  save(worker: Worker): IPromise<any> {
    this.cfpLoadingBar.start();
    let config: IRequestShortcutConfig;
    return this.$http.post(this.restServiceUrl + '/workers', worker)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  update(id: number, worker: Worker): IPromise<any> {
    this.cfpLoadingBar.start();
    let config: IRequestShortcutConfig;
    return this.$http.put(this.restServiceUrl + '/workers/' + id, worker)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  delete(id:number): IPromise<any> {
    this.cfpLoadingBar.start();
    let config: IRequestShortcutConfig;
    return this.$http.delete(this.restServiceUrl + '/workers/' + id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  getEvents(id: number): IPromise<any> {
    this.cfpLoadingBar.start();
    return this.$http.get(this.restServiceUrl + '/workers/' + id + '/events')
      .then((response: ng.IHttpPromiseCallbackArg<Order[]>)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

}
