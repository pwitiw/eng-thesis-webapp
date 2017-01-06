"use strict";
var EventRestService = (function () {
    function EventRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://127.0.0.1:4567';
    }
    EventRestService.prototype.getEvents = function () {
        return this.$http.get(this.restServiceUrl + '/events')
            .then(function (response) {
            return response.data;
        });
    };
    EventRestService.prototype.deleteEvent = function (orderId, positionId) {
        return this.$http.delete(this.restServiceUrl + '/events/' + orderId + "/" + positionId)
            .then(function (response) {
            return response.data;
        });
    };
    return EventRestService;
}());
exports.EventRestService = EventRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9ldmVudFJlc3RTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBR0UsMEJBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQzthQUNuRCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksT0FBZSxFQUFFLFVBQWtCO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQzthQUNwRixJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFSCx1QkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksd0JBQWdCLG1CQXFCNUIsQ0FBQSIsImZpbGUiOiJnZW5lcmFsL3Jlc3Qtc2VydmljZXMvZXZlbnRSZXN0U2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
