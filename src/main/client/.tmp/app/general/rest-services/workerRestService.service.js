"use strict";
var WorkerRestService = (function () {
    function WorkerRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://127.0.0.1:4567';
    }
    WorkerRestService.prototype.getWorkers = function () {
        return this.$http.get(this.restServiceUrl + '/workers/')
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.getWorker = function (id) {
        return this.$http.get(this.restServiceUrl + '/order?id=' + id)
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.save = function (worker) {
        var config;
        return this.$http.post(this.restServiceUrl + '/order/', worker)
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.delete = function (id) {
        var config;
        return this.$http.get(this.restServiceUrl + '/deleteOrder?id=' + id)
            .then(function (response) {
            return response.data;
        });
    };
    return WorkerRestService;
}());
exports.WorkerRestService = WorkerRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy93b3JrZXJSZXN0U2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQTtJQUdFLDJCQUFvQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7SUFDaEQsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7YUFDckQsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLEVBQVU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxHQUFDLEVBQUUsQ0FBQzthQUN6RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxnQ0FBSSxHQUFKLFVBQUssTUFBYztRQUNqQixJQUFJLE1BQThCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQzthQUM1RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sRUFBUztRQUNkLElBQUksTUFBOEIsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxrQkFBa0IsR0FBQyxFQUFFLENBQUM7YUFDL0QsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLHlCQUFpQixvQkFxQzdCLENBQUEiLCJmaWxlIjoiZ2VuZXJhbC9yZXN0LXNlcnZpY2VzL3dvcmtlclJlc3RTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
