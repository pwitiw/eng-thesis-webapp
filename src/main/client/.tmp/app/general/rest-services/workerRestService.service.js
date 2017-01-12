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
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getWorkers = function () {
        return this.$http.get(this.restServiceUrl + '/workers/')
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getWorker = function (id) {
        return this.$http.get(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.save = function (worker) {
        var config;
        return this.$http.post(this.restServiceUrl + '/workers', worker)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.update = function (id, worker) {
        var config;
        return this.$http.put(this.restServiceUrl + '/workers/' + id, worker)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.delete = function (id) {
        var config;
        return this.$http.delete(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getEvents = function (id) {
        return this.$http.get(this.restServiceUrl + '/workers/' + id + '/events')
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    return WorkerRestService;
}());
exports.WorkerRestService = WorkerRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy93b3JrZXJSZXN0U2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUdFLDJCQUFvQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7SUFDaEQsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQzthQUM5RCxJQUFJLENBQUMsVUFBQyxRQUE4QztZQUNuRCxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsRUFDRCxVQUFDLFFBQW9DO1lBQ25DLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQzthQUNyRCxJQUFJLENBQUMsVUFBQyxRQUE4QztZQUNuRCxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsRUFDRCxVQUFDLFFBQW9DO1lBQ25DLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFB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QUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO2FBQ3RFLElBQUksQ0FBQyxVQUFDLFFBQTZDO1lBQ2xELE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxFQUNELFVBQUMsUUFBb0M7WUFDbkMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFSCx3QkFBQztBQUFELENBaEZBLEFBZ0ZDLElBQUE7QUFoRlkseUJBQWlCLG9CQWdGN0IsQ0FBQSIsImZpbGUiOiJnZW5lcmFsL3Jlc3Qtc2VydmljZXMvd29ya2VyUmVzdFNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
