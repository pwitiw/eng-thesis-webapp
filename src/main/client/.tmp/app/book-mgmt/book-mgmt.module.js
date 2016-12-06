"use strict";
var book_details_state_def_1 = require("./book-details/book-details.state-def");
var book_details_controller_1 = require("./book-details/book-details.controller");
var book_service_1 = require("./book.service");
var book_overview_state_def_1 = require("./book-overview/book-overview.state-def");
var book_overview_controller_1 = require("./book-overview/book-overview.controller");
var bookRestService_service_1 = require("../general/rest-services/bookRestService.service");
var bookMgmtModule = angular.module('book-mgmt', ['ui.router'])
    .config(function ($stateProvider) {
    book_details_state_def_1.addBookDetailsStateDef($stateProvider);
    book_overview_state_def_1.addBookOverviewStateDef($stateProvider);
})
    .controller('BookDetailsCtrl', book_details_controller_1.BookDetailsCtrl)
    .controller('BookOverviewCtrl', book_overview_controller_1.BookOverviewCtrl)
    .service('bookService', book_service_1.BookService)
    .service('bookRestService', bookRestService_service_1.BookRestService);
exports.__esModule = true;
exports["default"] = bookMgmtModule.name;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stbWdtdC9ib29rLW1nbXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSx1Q0FBcUMsdUNBQXVDLENBQUMsQ0FBQTtBQUM3RSx3Q0FBOEIsd0NBQXdDLENBQUMsQ0FBQTtBQUN2RSw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyx3Q0FBc0MseUNBQXlDLENBQUMsQ0FBQTtBQUNoRix5Q0FBK0IsMENBQTBDLENBQUMsQ0FBQTtBQUMxRSx3Q0FBOEIsa0RBQWtELENBQUMsQ0FBQTtBQUVqRixJQUFJLGNBQWMsR0FBWSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3JFLE1BQU0sQ0FBQyxVQUFVLGNBQThCO0lBQzlDLCtDQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZDLGlEQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3pDLENBQUMsQ0FBQztLQUNELFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSx5Q0FBZSxDQUFDO0tBQzlDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSwyQ0FBZ0IsQ0FBQztLQUNoRCxPQUFPLENBQUMsYUFBYSxFQUFFLDBCQUFXLENBQUM7S0FDbkMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLHlDQUFlLENBQUMsQ0FBQztBQUMvQztxQkFBZSxjQUFjLENBQUMsSUFBSSxDQUFDIiwiZmlsZSI6ImJvb2stbWdtdC9ib29rLW1nbXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
