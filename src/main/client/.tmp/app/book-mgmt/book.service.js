"use strict";
var BookService = (function () {
    function BookService(bookRestService) {
        this.bookRestService = bookRestService;
        this.books = [
            { id: 1, title: 'Angular', author: 'Henryk Sienkiewicz' },
            { id: 2, title: 'Java', author: 'Maria Konopnicka' },
            { id: 3, title: 'Programming mysteries', author: 'Paulo Coelho' }
        ];
        this.sequencer = 1;
    }
    BookService.prototype.save = function (book) {
        this.bookRestService.save(book);
    };
    BookService.prototype.delete = function (id) {
        this.bookRestService.delete(id);
    };
    BookService.prototype.findOne = function (id) {
        return this.bookRestService.getBook(id);
    };
    BookService.prototype.findAll = function () {
        return this.bookRestService.getBooks();
        //return this.books;
    };
    return BookService;
}());
exports.BookService = BookService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stbWdtdC9ib29rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBUUUscUJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVA1QyxVQUFLLEdBQVc7WUFDdEIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFDO1lBQ3ZELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBQztZQUNsRCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUM7U0FDaEUsQ0FBQztRQUNNLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFJdEIsQ0FBQztJQUVELDBCQUFJLEdBQUosVUFBSyxJQUFVO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFvQjtJQUN0QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLG1CQUFXLGNBNEJ2QixDQUFBIiwiZmlsZSI6ImJvb2stbWdtdC9ib29rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
