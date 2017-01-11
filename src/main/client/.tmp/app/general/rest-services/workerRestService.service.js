"use strict";
var WorkerRestService = (function () {
    function WorkerRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://localhost:8080';
    }
    WorkerRestService.prototype.getPositions = function () {
        return this.$http.get(this.restServiceUrl + '/workers/positions')
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getWorkers = function () {
        return this.$http.get(this.restServiceUrl + '/workers/')
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.getWorker = function (id) {
        return this.$http.get(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.save = function (worker) {
        var config;
        return this.$http.post(this.restServiceUrl + '/workers', worker)
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.update = function (id, worker) {
        var config;
        return this.$http.put(this.restServiceUrl + '/workers/' + id, worker)
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.delete = function (id) {
        var config;
        return this.$http.delete(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            return response.data;
        });
    };
    return WorkerRestService;
}());
exports.WorkerRestService = WorkerRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy93b3JrZXJSZXN0U2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUdFLDJCQUFvQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7SUFDaEQsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQzthQUM5RCxJQUFJLENBQUMsVUFBQyxRQUE4QztZQUNuRCxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7YUFDckQsSUFBSSxDQUFDLFVBQUMsUUFBOEM7WUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLEVBQVU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxHQUFDLEVBQUUsQ0FBQzthQUN4RCxJQUFJLENBQUMsVUFBQyxRQUE2QztZQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxnQ0FBSSxHQUFKLFVBQUssTUFBYztRQUNqQixJQUFJLE1BQThCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxFQUFFLE1BQU0sQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sRUFBVSxFQUFFLE1BQWM7UUFDL0IsSUFBSSxNQUE4QixDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDO2FBQ2xFLElBQUksQ0FBQyxVQUFDLFFBQW9DO1lBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxFQUFTO1FBQ2QsSUFBSSxNQUE4QixDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7YUFDN0QsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLHlCQUFpQixvQkFvRDdCLENBQUEiLCJmaWxlIjoiZ2VuZXJhbC9yZXN0LXNlcnZpY2VzL3dvcmtlclJlc3RTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
