"use strict";
var WorkerRestService = (function () {
    function WorkerRestService($http, cfpLoadingBar) {
        this.$http = $http;
        this.cfpLoadingBar = cfpLoadingBar;
        this.restServiceUrl = 'http://localhost:7777';
    }
    WorkerRestService.prototype.getPositions = function () {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/workers/positions')
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getWorkers = function () {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/workers/')
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getWorker = function (id) {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.save = function (worker) {
        var _this = this;
        this.cfpLoadingBar.start();
        var config;
        return this.$http.post(this.restServiceUrl + '/workers', worker)
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.update = function (id, worker) {
        var _this = this;
        this.cfpLoadingBar.start();
        var config;
        return this.$http.put(this.restServiceUrl + '/workers/' + id, worker)
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.delete = function (id) {
        var _this = this;
        this.cfpLoadingBar.start();
        var config;
        return this.$http.delete(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    WorkerRestService.prototype.getEvents = function (id) {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/workers/' + id + '/events')
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    return WorkerRestService;
}());
exports.WorkerRestService = WorkerRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy93b3JrZXJSZXN0U2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUdFLDJCQUFvQixLQUFtQixFQUFVLGFBQWtCO1FBQS9DLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQUNqRSxJQUFJLENBQUMsY0FBYyxHQUFHLHVCQUF1QixDQUFDO0lBQ2hELENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO2FBQzlELElBQUksQ0FBQyxVQUFDLFFBQThDO1lBQ25ELEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLEVBQ0QsVUFBQyxRQUFvQztZQUNuQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxD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RUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLEVBQVU7UUFBcEIsaUJBV0M7UUFWQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO2FBQ3RFLElBQUksQ0FBQyxVQUFDLFFBQTZDO1lBQ2xELEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLEVBQ0QsVUFBQyxRQUFvQztZQUNuQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQXJHQSxBQXFHQyxJQUFBO0FBckdZLHlCQUFpQixvQkFxRzdCLENBQUEiLCJmaWxlIjoiZ2VuZXJhbC9yZXN0LXNlcnZpY2VzL3dvcmtlclJlc3RTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
