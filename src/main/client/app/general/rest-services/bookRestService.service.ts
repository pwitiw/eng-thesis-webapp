import IHttpService = angular.IHttpService;
import {Book} from "../interfaces/book.interface";
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig;
export class BookRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService) {
    this.restServiceUrl = 'http://127.0.0.1:4567';
  }

  getBooks(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/books/')
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  getBook(id: number): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/book?id='+id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  save(book: Book): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.post(this.restServiceUrl + '/book/', book)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  delete(id:number): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.get(this.restServiceUrl + '/deleteBook?id='+id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

}
