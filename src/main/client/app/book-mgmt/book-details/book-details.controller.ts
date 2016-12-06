import {Book} from "../../general/interfaces/book.interface";
import {BookService} from "../book.service";
export class BookDetailsCtrl {
  book: Book;
  bookForm: any;
  ss='sdaw' ;

  constructor(private bookService: BookService,private savedBook:Book, private $state:ng.ui.IStateService) {
    this.book = savedBook;
  }

  save(): void {
    let formIsValid = this.bookForm && this.bookForm.$valid;
    if (formIsValid) {
      this.bookService.save(this.book)
        .then(()=>{this.$state.go('book-overview',{},{reload:true});
      });
    }
  }

  getErrorMessageFromField(field: any): string {
    let errors = field && field.$error,
      fieldIsInvalid = field && field.$error,
      fieldIsTouched = field && field.$touched,
      formIsSubmitted = this.bookForm && this.bookForm.$submitted;

    if (fieldIsInvalid && (formIsSubmitted || fieldIsTouched))
      return this.createErrorMsg(errors);
  }

  private createErrorMsg(errors: any) {
    if (errors) {
      for (let errorCode in errors) {
        if (errors.hasOwnProperty(errorCode)) {
          switch (errorCode) {
            case 'required':
              return 'Please provide a value';
            case 'maxlength':
              return ' The value is too long';
            default:
              return 'The value is wrong';
          }
        }
      }
    }
  }
}
