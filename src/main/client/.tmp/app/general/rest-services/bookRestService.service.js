"use strict";
var BookRestService = (function () {
    function BookRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://127.0.0.1:4567';
    }
    BookRestService.prototype.getBooks = function () {
        return this.$http.get(this.restServiceUrl + '/books/')
            .then(function (response) {
            return response.data;
        });
    };
    BookRestService.prototype.getBook = function (id) {
        return this.$http.get(this.restServiceUrl + '/book?id=' + id)
            .then(function (response) {
            return response.data;
        });
    };
    BookRestService.prototype.save = function (book) {
        var config;
        return this.$http.post(this.restServiceUrl + '/book/', book)
            .then(function (response) {
            return response.data;
        });
    };
    BookRestService.prototype.delete = function (id) {
        var config;
        return this.$http.get(this.restServiceUrl + '/deleteBook?id=' + id)
            .then(function (response) {
            return response.data;
        });
    };
    return BookRestService;
}());
exports.BookRestService = BookRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9ib29rUmVzdFNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFHRSx5QkFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLHVCQUF1QixDQUFDO0lBQ2hELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO2FBQ25ELElBQUksQ0FBQyxVQUFDLFFBQW9DO1lBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsR0FBQyxFQUFFLENBQUM7YUFDeEQsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLElBQVU7UUFDYixJQUFJLE1BQThCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQzthQUN6RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sRUFBUztRQUNkLElBQUksTUFBOEIsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsR0FBQyxFQUFFLENBQUM7YUFDOUQsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLHVCQUFlLGtCQXFDM0IsQ0FBQSIsImZpbGUiOiJnZW5lcmFsL3Jlc3Qtc2VydmljZXMvYm9va1Jlc3RTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
