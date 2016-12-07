"use strict";
var main_page_state_def_1 = require("./main-page.state-def");
var mainPageModule = angular.module('main-page', ['ui.router'])
    .config(function ($stateProvider) {
    main_page_state_def_1.addMainPageStateDef($stateProvider);
});
exports.__esModule = true;
exports["default"] = mainPageModule.name;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS9tYWluLXBhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxvQ0FBa0MsdUJBQXVCLENBQUMsQ0FBQTtBQUUxRCxJQUFJLGNBQWMsR0FBWSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3JFLE1BQU0sQ0FBQyxVQUFVLGNBQThCO0lBQzlDLHlDQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQyxDQUFBO0FBQ0o7cUJBQWUsY0FBYyxDQUFDLElBQUksQ0FBQyIsImZpbGUiOiJtYWluLXBhZ2UvbWFpbi1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
