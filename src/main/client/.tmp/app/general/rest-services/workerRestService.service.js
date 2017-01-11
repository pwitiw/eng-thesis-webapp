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
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getWorker = function (id) {
        return this.$http.get(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.save = function (worker) {
        var config;
        return this.$http.post(this.restServiceUrl + '/workers', worker)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.update = function (id, worker) {
        var config;
        return this.$http.put(this.restServiceUrl + '/workers/' + id, worker)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.delete = function (id) {
        var config;
        return this.$http.delete(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getEvents = function (id) {
        return this.$http.get(this.restServiceUrl + '/workers/' + id + '/events')
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    return WorkerRestService;
}());
exports.WorkerRestService = WorkerRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy93b3JrZXJSZXN0U2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUdFLDJCQUFvQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7SUFDaEQsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQzthQUM5RCxJQUFJLENBQUMsVUFBQyxRQUE4QztZQUNuRCxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7YUFDckQsSUFBSSxDQUFDLFVBQUMsUUFBOEM7WUFDbkQsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsRUFBVTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLEdBQUMsRUFBRSxDQUFDO2FBQ3hELElBQUksQ0FBQyxVQUFDLFFBQTZDO1lBQ2xELE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsZ0NBQUksR0FBSixVQUFLLE1BQWM7UUFDakIsSUFBSSxNQUE4QixDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsRUFBRSxNQUFNLENBQUM7YUFDN0QsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sRUFBVSxFQUFFLE1BQWM7UUFDL0IsSUFBSSxNQUE4QixDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDO2FBQ2xFLElBQUksQ0FBQyxVQUFDLFFBQW9DO1lBQ3pDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLEVBQVM7UUFDZCxJQUFJLE1BQThCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO2FBQ3RFLElBQUksQ0FBQyxVQUFDLFFBQTZDO1lBQ2xELE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQTNEQSxBQTJEQyxJQUFBO0FBM0RZLHlCQUFpQixvQkEyRDdCLENBQUEiLCJmaWxlIjoiZ2VuZXJhbC9yZXN0LXNlcnZpY2VzL3dvcmtlclJlc3RTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
