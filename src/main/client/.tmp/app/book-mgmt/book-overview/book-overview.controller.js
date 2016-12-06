"use strict";
var BookOverviewCtrl = (function () {
    function BookOverviewCtrl(books, bookService) {
        this.books = books;
        this.bookService = bookService;
    }
    BookOverviewCtrl.prototype.delete = function (id) {
        this.bookService.delete(id);
    };
    return BookOverviewCtrl;
}());
exports.BookOverviewCtrl = BookOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stbWdtdC9ib29rLW92ZXJ2aWV3L2Jvb2stb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFFRSwwQkFBb0IsS0FBYSxFQUFVLFdBQXdCO1FBQS9DLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUVuRSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQVM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdCQUFnQixtQkFTNUIsQ0FBQSIsImZpbGUiOiJib29rLW1nbXQvYm9vay1vdmVydmlldy9ib29rLW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
