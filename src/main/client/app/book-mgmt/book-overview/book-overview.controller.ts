import {Book} from "../../general/interfaces/book.interface";
import {BookService} from "../book.service";
export class BookOverviewCtrl {

  constructor(private books: Book[], private bookService: BookService) {

  }

  delete(id:number): void {
    this.bookService.delete(id);
  }
}
