"use strict";
var EventRestService = (function () {
    function EventRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://localhost:8080';
    }
    EventRestService.prototype.getEvents = function () {
        return this.$http.get(this.restServiceUrl + '/events')
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    EventRestService.prototype.delete = function (orderId, positionId) {
        return this.$http.delete(this.restServiceUrl + '/events/' + orderId + '/' + positionId)
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    return EventRestService;
}());
exports.EventRestService = EventRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9ldmVudFJlc3RTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBR0UsMEJBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQzthQUNuRCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsRUFDRCxVQUFDLFFBQW9DO1lBQ25DLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLE9BQWUsRUFBRSxVQUFrQjtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUM7YUFDcEYsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLEVBQ0QsVUFBQyxRQUFvQztZQUNuQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSx3QkFBZ0IsbUJBMEI1QixDQUFBIiwiZmlsZSI6ImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9ldmVudFJlc3RTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
