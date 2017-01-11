"use strict";
var EventRestService = (function () {
    function EventRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://127.0.0.1:4567';
    }
    EventRestService.prototype.getEvents = function () {
        return this.$http.get(this.restServiceUrl + '/events')
            .then(function (response) {
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    return EventRestService;
}());
exports.EventRestService = EventRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9ldmVudFJlc3RTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBR0UsMEJBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQzthQUNuRCxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSx3QkFBZ0IsbUJBYTVCLENBQUEiLCJmaWxlIjoiZ2VuZXJhbC9yZXN0LXNlcnZpY2VzL2V2ZW50UmVzdFNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
