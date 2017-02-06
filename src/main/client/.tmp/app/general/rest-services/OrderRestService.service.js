"use strict";
var OrderRestService = (function () {
    function OrderRestService($http, cfpLoadingBar) {
        this.$http = $http;
        this.cfpLoadingBar = cfpLoadingBar;
        this.restServiceUrl = 'http://localhost:7777';
    }
    OrderRestService.prototype.getOrders = function () {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/orders/')
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.getOrder = function (id) {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/orders/' + id)
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.edit = function (id, order) {
        var _this = this;
        this.cfpLoadingBar.start();
        var config;
        return this.$http.put(this.restServiceUrl + '/orders/' + id, order)
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.delete = function (id) {
        var _this = this;
        this.cfpLoadingBar.start();
        var config;
        return this.$http.delete(this.restServiceUrl + '/orders/' + id)
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.changeType = function (id) {
        var _this = this;
        this.cfpLoadingBar.start();
        var config;
        return this.$http.put(this.restServiceUrl + '/orders/' + id + "/change-status", "")
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.getComponent = function (id) {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/orders/' + id + "/components")
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.synchronize = function () {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/synchronize')
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    return OrderRestService;
}());
exports.OrderRestService = OrderRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9vcmRlclJlc3RTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBR0UsMEJBQW9CLEtBQW1CLEVBQVUsYUFBa0I7UUFBL0MsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7SUFDaEQsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO2FBQ3BELElBQUksQ0FBQyxVQUFDLFFBQW9DO1lBQ3pDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLEVBQ0QsVUFBQyxRQUFvQztZQUNuQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLEVBQVU7UUFBbkIsaUJBV0M7UUFWQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FB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Q0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQzthQUN4RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxFQUNELFVBQUMsUUFBb0M7WUFDbkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FyR0EsQUFxR0MsSUFBQTtBQXJHWSx3QkFBZ0IsbUJBcUc1QixDQUFBIiwiZmlsZSI6ImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9vcmRlclJlc3RTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
