/// <reference path="../../typings/globals/angular/index.d.ts" />
import IModule = angular.IModule;
import {IStateProvider} from "angular-ui-router";
import {addLoginPageStateDef} from "./login-page.state-def";

let loginPageModule: IModule = angular.module('login-page', ['ui.router'])
  .config(function ($stateProvider: IStateProvider) {
    addLoginPageStateDef($stateProvider)
  })
export default loginPageModule.name;
