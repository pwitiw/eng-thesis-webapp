import IStateProvider = angular.ui.IStateProvider;
import {BookService} from "../book.service";
import {IStateParamsService} from "angular-ui-router";
import ILocationService = angular.ILocationService;
/**
 * Created by PWITIW on 2016-11-09.
 */

export function addBookDetailsStateDef($stateProvider: IStateProvider) {
  let bookIdParam: string = 'bookId',
    url = '/book-mgmt/book/';

  return $stateProvider.state('book-details', {
      url: url + ':' + bookIdParam,
      templateUrl: 'book-mgmt/book-details/book-details.html',
      controller: 'BookDetailsCtrl',
      controllerAs: 'bookDetailsCtrl',
      resolve: {
        /* @ngInject */
        savedBook: function (bookService: BookService,
                        $stateParams: IStateParamsService,
                        $location: ILocationService) {

          let bookId = $stateParams[bookIdParam];
          if (bookId) {
            let currentBook = bookService.findOne(parseInt(bookId, 10));
            if (currentBook) {
              return currentBook;
            } else {
              $location.path(url);
            }
          } else {
            return {};
          }
        }
      }
    }
  )
}
