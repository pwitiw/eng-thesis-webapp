/// <reference path="../../typings/globals/angular/index.d.ts" />
import IModule = angular.IModule;
import {IStateProvider} from "angular-ui-router";
import {addBookDetailsStateDef} from "./book-details/book-details.state-def";
import {BookDetailsCtrl} from "./book-details/book-details.controller";
import {BookService} from "./book.service";
import {addBookOverviewStateDef} from "./book-overview/book-overview.state-def";
import {BookOverviewCtrl} from "./book-overview/book-overview.controller";
import {BookRestService} from "../general/rest-services/bookRestService.service";

let bookMgmtModule: IModule = angular.module('book-mgmt', ['ui.router'])
  .config(function ($stateProvider: IStateProvider) {
    addBookDetailsStateDef($stateProvider);
    addBookOverviewStateDef($stateProvider)
  })
  .controller('BookDetailsCtrl', BookDetailsCtrl)
  .controller('BookOverviewCtrl', BookOverviewCtrl)
  .service('bookService', BookService)
  .service('bookRestService', BookRestService);
export default bookMgmtModule.name;
