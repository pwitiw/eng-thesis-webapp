import {Book} from "../general/interfaces/book.interface";
import {BookRestService} from "../general/rest-services/bookRestService.service";
export class BookService {
  private books: Book[] = [
    {id: 1, title: 'Angular', author: 'Henryk Sienkiewicz'},
    {id: 2, title: 'Java', author: 'Maria Konopnicka'},
    {id: 3, title: 'Programming mysteries', author: 'Paulo Coelho'}
  ];
  private sequencer = 1;

  constructor(private bookRestService: BookRestService) {

  }

  save(book: Book): any {
    this.bookRestService.save(book);
  }

  delete(id: number): any {
    this.bookRestService.delete(id);
  }

  findOne(id: number): any {
    return this.bookRestService.getBook(id);
  }

  findAll(): any {
    return this.bookRestService.getBooks();
    //return this.books;
  }
}
