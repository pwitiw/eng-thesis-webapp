import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig;
import {Event} from "../interfaces/event.interface";
export class EventRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService, private cfpLoadingBar: any) {
    this.restServiceUrl = 'http://localhost:7777';
  }

  getEvents(): IPromise<any> {
    this.cfpLoadingBar.start();
    return this.$http.get(this.restServiceUrl + '/events')
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }

  delete(orderId: number, positionId: number): IPromise<any> {
    this.cfpLoadingBar.start();
    return this.$http.delete(this.restServiceUrl + '/events/' + orderId + '/' + positionId)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      },
      (response: ng.IHttpPromiseCallbackArg)=> {
        this.cfpLoadingBar.complete();
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }
}
