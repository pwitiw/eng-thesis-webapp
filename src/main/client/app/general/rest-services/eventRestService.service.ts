import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig;
import {Event} from "../interfaces/event.interface";
export class EventRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService) {
    this.restServiceUrl = 'http://127.0.0.1:4567';
  }

  getEvents(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/orders/')
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  getEvent(id: number): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/order?id='+id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  save(event: Event): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.post(this.restServiceUrl + '/order/', event)
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
