"use strict";
var BookDetailsCtrl = (function () {
    function BookDetailsCtrl(bookService, savedBook, $state) {
        this.bookService = bookService;
        this.savedBook = savedBook;
        this.$state = $state;
        this.ss = 'sdaw';
        this.book = savedBook;
    }
    BookDetailsCtrl.prototype.save = function () {
        var _this = this;
        var formIsValid = this.bookForm && this.bookForm.$valid;
        if (formIsValid) {
            this.bookService.save(this.book)
                .then(function () {
                _this.$state.go('book-overview', {}, { reload: true });
            });
        }
    };
    BookDetailsCtrl.prototype.getErrorMessageFromField = function (field) {
        var errors = field && field.$error, fieldIsInvalid = field && field.$error, fieldIsTouched = field && field.$touched, formIsSubmitted = this.bookForm && this.bookForm.$submitted;
        if (fieldIsInvalid && (formIsSubmitted || fieldIsTouched))
            return this.createErrorMsg(errors);
    };
    BookDetailsCtrl.prototype.createErrorMsg = function (errors) {
        if (errors) {
            for (var errorCode in errors) {
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
    };
    return BookDetailsCtrl;
}());
exports.BookDetailsCtrl = BookDetailsCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stbWdtdC9ib29rLWRldGFpbHMvYm9vay1kZXRhaWxzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBS0UseUJBQW9CLFdBQXdCLEVBQVMsU0FBYyxFQUFVLE1BQTBCO1FBQW5GLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBRnZHLE9BQUUsR0FBQyxNQUFNLENBQUU7UUFHVCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzdCLElBQUksQ0FBQztnQkFBSyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUMsRUFBRSxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELGtEQUF3QixHQUF4QixVQUF5QixLQUFVO1FBQ2pDLElBQUksTUFBTSxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUNoQyxjQUFjLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQ3RDLGNBQWMsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsRUFDeEMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFFOUQsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsZUFBZSxJQUFJLGNBQWMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTyx3Q0FBYyxHQUF0QixVQUF1QixNQUFXO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsS0FBSyxVQUFVOzRCQUNiLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDbEMsS0FBSyxXQUFXOzRCQUNkLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDbEM7NEJBQ0UsTUFBTSxDQUFDLG9CQUFvQixDQUFDO29CQUNoQyxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1ksdUJBQWUsa0JBNEMzQixDQUFBIiwiZmlsZSI6ImJvb2stbWdtdC9ib29rLWRldGFpbHMvYm9vay1kZXRhaWxzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
