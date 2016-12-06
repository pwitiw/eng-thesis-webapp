"use strict";
/**
 * Created by PWITIW on 2016-11-09.
 */
function addBookDetailsStateDef($stateProvider) {
    var bookIdParam = 'bookId', url = '/book-mgmt/book/';
    return $stateProvider.state('book-details', {
        url: url + ':' + bookIdParam,
        templateUrl: 'book-mgmt/book-details/book-details.html',
        controller: 'BookDetailsCtrl',
        controllerAs: 'bookDetailsCtrl',
        resolve: {
            /* @ngInject */
            savedBook: function (bookService, $stateParams, $location) {
                var bookId = $stateParams[bookIdParam];
                if (bookId) {
                    var currentBook = bookService.findOne(parseInt(bookId, 10));
                    if (currentBook) {
                        return currentBook;
                    }
                    else {
                        $location.path(url);
                    }
                }
                else {
                    return {};
                }
            }
        }
    });
}
exports.addBookDetailsStateDef = addBookDetailsStateDef;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stbWdtdC9ib29rLWRldGFpbHMvYm9vay1kZXRhaWxzLnN0YXRlLWRlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7O0dBRUc7QUFFSCxnQ0FBdUMsY0FBOEI7SUFDbkUsSUFBSSxXQUFXLEdBQVcsUUFBUSxFQUNoQyxHQUFHLEdBQUcsa0JBQWtCLENBQUM7SUFFM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1FBQ3hDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLFdBQVc7UUFDNUIsV0FBVyxFQUFFLDBDQUEwQztRQUN2RCxVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLFlBQVksRUFBRSxpQkFBaUI7UUFDL0IsT0FBTyxFQUFFO1lBQ1AsZUFBZTtZQUNmLFNBQVMsRUFBRSxVQUFVLFdBQXdCLEVBQzdCLFlBQWlDLEVBQ2pDLFNBQTJCO2dCQUV6QyxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQyxXQUFXLENBQUM7b0JBQ3JCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsQ0FBQztnQkFDSCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ1osQ0FBQztZQUNILENBQUM7U0FDRjtLQUNGLENBQ0YsQ0FBQTtBQUNILENBQUM7QUE5QmUsOEJBQXNCLHlCQThCckMsQ0FBQSIsImZpbGUiOiJib29rLW1nbXQvYm9vay1kZXRhaWxzL2Jvb2stZGV0YWlscy5zdGF0ZS1kZWYuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
