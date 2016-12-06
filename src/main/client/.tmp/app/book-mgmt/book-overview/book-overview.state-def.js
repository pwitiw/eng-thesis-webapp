"use strict";
/**
 * Created by PWITIW on 2016-11-09.
 */
function addBookOverviewStateDef($stateProvider) {
    return $stateProvider.state('book-overview', {
        url: '/book-mgmt/books',
        templateUrl: 'book-mgmt/book-overview/book-overview.html',
        controller: 'BookOverviewCtrl',
        controllerAs: 'bookOverviewCtrl',
        resolve: {
            /* @ngInject */
            books: function (bookService) {
                return bookService.findAll();
            }
        }
    });
}
exports.addBookOverviewStateDef = addBookOverviewStateDef;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stbWdtdC9ib29rLW92ZXJ2aWV3L2Jvb2stb3ZlcnZpZXcuc3RhdGUtZGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTs7R0FFRztBQUVILGlDQUF3QyxjQUE4QjtJQUNwRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7UUFDM0MsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixXQUFXLEVBQUUsNENBQTRDO1FBQ3pELFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsWUFBWSxFQUFFLGtCQUFrQjtRQUNoQyxPQUFPLEVBQUU7WUFDUCxlQUFlO1lBQ2YsS0FBSyxFQUFFLFVBQVUsV0FBd0I7Z0JBQ3ZDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQWJlLCtCQUF1QiwwQkFhdEMsQ0FBQSIsImZpbGUiOiJib29rLW1nbXQvYm9vay1vdmVydmlldy9ib29rLW92ZXJ2aWV3LnN0YXRlLWRlZi5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
