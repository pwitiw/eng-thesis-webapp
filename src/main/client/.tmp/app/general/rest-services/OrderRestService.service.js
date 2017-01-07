"use strict";
var OrderRestService = (function () {
    function OrderRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://localhost:8080';
    }
    OrderRestService.prototype.getOrders = function () {
        return this.$http.get(this.restServiceUrl + '/orders/')
            .then(function (response) {
            return response.data;
        });
    };
    OrderRestService.prototype.getOrder = function (id) {
        return this.$http.get(this.restServiceUrl + '/orders/' + id)
            .then(function (response) {
            return response.data;
        });
    };
    OrderRestService.prototype.edit = function (id, order) {
        var config;
        return this.$http.put(this.restServiceUrl + '/orders/' + id, order)
            .then(function (response) {
            return response.data;
        });
    };
    OrderRestService.prototype.delete = function (id) {
        var config;
        return this.$http.delete(this.restServiceUrl + '/orders/' + id)
            .then(function (response) {
            return response.data;
        });
    };
    OrderRestService.prototype.changeType = function (id) {
        var config;
        return this.$http.put(this.restServiceUrl + '/orders/' + id + "/change-status", "")
            .then(function (response) {
            return response.data;
        });
    };
    OrderRestService.prototype.getComponent = function (id) {
        return this.$http.get(this.restServiceUrl + '/orders/' + id + "/components")
            .then(function (response) {
            return response.data;
        });
    };
    OrderRestService.prototype.synchronize = function () {
        return this.$http.get(this.restServiceUrl + '/synchronize')
            .then(function (response) {
            return response.data;
        });
    };
    return OrderRestService;
}());
exports.OrderRestService = OrderRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9vcmRlclJlc3RTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBR0UsMEJBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQzthQUNwRCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsRUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLEdBQUMsRUFBRSxDQUFDO2FBQ3ZELElBQUksQ0FBQyxVQUFDLFFBQW9DO1lBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxFQUFVLEVBQUUsS0FBWTtRQUMzQixJQUFJLE1BQThCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUM7YUFDaEUsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQVM7UUFDZCxJQUFJLE1BQThCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxHQUFDLEVBQUUsQ0FBQzthQUMxRCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixJQUFJLE1BQThCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxHQUFDLEVBQUUsR0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7YUFDNUUsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR0QsdUNBQVksR0FBWixVQUFhLEVBQVU7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxHQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7YUFDdkUsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQzthQUN4RCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDSCx1QkFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRFksd0JBQWdCLG1CQTJENUIsQ0FBQSIsImZpbGUiOiJnZW5lcmFsL3Jlc3Qtc2VydmljZXMvb3JkZXJSZXN0U2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
