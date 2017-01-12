"use strict";
var OrderRestService = (function () {
    function OrderRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://localhost:8080';
    }
    OrderRestService.prototype.getOrders = function () {
        return this.$http.get(this.restServiceUrl + '/orders/')
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.getOrder = function (id) {
        return this.$http.get(this.restServiceUrl + '/orders/' + id)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.edit = function (id, order) {
        var config;
        return this.$http.put(this.restServiceUrl + '/orders/' + id, order)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.delete = function (id) {
        var config;
        return this.$http.delete(this.restServiceUrl + '/orders/' + id)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.changeType = function (id) {
        var config;
        return this.$http.put(this.restServiceUrl + '/orders/' + id + "/change-status", "")
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.getComponent = function (id) {
        return this.$http.get(this.restServiceUrl + '/orders/' + id + "/components")
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    OrderRestService.prototype.synchronize = function () {
        return this.$http.get(this.restServiceUrl + '/synchronize')
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    return OrderRestService;
}());
exports.OrderRestService = OrderRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9vcmRlclJlc3RTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBR0UsMEJBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQzthQUNwRCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsRUFDRCxVQUFDLFFBQW9DO1lBQ25DLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLEVBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxHQUFDLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsRUFDRCxVQUFDLFFBQW9DO1lBQ25DLE1BQU0s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LENBQUMsRUFDRCxVQUFDLFFBQW9DO1lBQ25DLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQzthQUN4RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsRUFDRCxVQUFDLFFBQW9DO1lBQ25DLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQWhGQSxBQWdGQyxJQUFBO0FBaEZZLHdCQUFnQixtQkFnRjVCLENBQUEiLCJmaWxlIjoiZ2VuZXJhbC9yZXN0LXNlcnZpY2VzL29yZGVyUmVzdFNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
