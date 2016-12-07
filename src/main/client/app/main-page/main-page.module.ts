/// <reference path="../../typings/globals/angular/index.d.ts" />
import IModule = angular.IModule;
import {IStateProvider} from "angular-ui-router";
import {addMainPageStateDef} from "./main-page.state-def";

let mainPageModule: IModule = angular.module('main-page', ['ui.router'])
  .config(function ($stateProvider: IStateProvider) {
    addMainPageStateDef($stateProvider)
  })
export default mainPageModule.name;
