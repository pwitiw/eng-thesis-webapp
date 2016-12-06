import IStateProvider = angular.ui.IStateProvider;
import {BookService} from "../book.service";
import {Book} from "../../general/interfaces/book.interface";
/**
 * Created by PWITIW on 2016-11-09.
 */

export function addBookOverviewStateDef($stateProvider: IStateProvider) {
  return $stateProvider.state('book-overview', {
    url: '/book-mgmt/books',
    templateUrl: 'book-mgmt/book-overview/book-overview.html',
    controller: 'BookOverviewCtrl',
    controllerAs: 'bookOverviewCtrl',
    resolve: {
      /* @ngInject */
      books: function (bookService: BookService) {
        return bookService.findAll();
      }
    }
  })
}
