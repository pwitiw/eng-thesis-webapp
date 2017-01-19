"use strict";
var EventRestService = (function () {
    function EventRestService($http, cfpLoadingBar) {
        this.$http = $http;
        this.cfpLoadingBar = cfpLoadingBar;
        this.restServiceUrl = 'http://localhost:8080';
    }
    EventRestService.prototype.getEvents = function () {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.get(this.restServiceUrl + '/events')
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    EventRestService.prototype.delete = function (orderId, positionId) {
        var _this = this;
        this.cfpLoadingBar.start();
        return this.$http.delete(this.restServiceUrl + '/events/' + orderId + '/' + positionId)
            .then(function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        }, function (response) {
            _this.cfpLoadingBar.complete();
            return { status: response.status, text: response.statusText, data: response.data };
        });
    };
    return EventRestService;
}());
exports.EventRestService = EventRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy9ldmVudFJlc3RTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBR0UsMEJBQW9CLEtBQW1CLEVBQVUsYUFBa0I7UUFBL0MsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7SUFDaEQsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO2FBQ25ELElBQUksQ0FBQyxVQUFDLFFBQW9DO1lBQ3pDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLEVBQ0QsVUFBQyxRQUFvQztZQUNuQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLE9BQWUsRUFBRSxVQUFrQjtRQUExQyxpQkFXQztRQVZDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDO2FBQ3BGLElBQUksQ0FBQyxVQUFDLFFBQW9DO1lBQ3pDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNuRixDQUFDLEVBQ0QsVUFBQyxRQUFvQztZQUNuQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHdCQUFnQixtQkFnQzVCLENBQUEiLCJmaWxlIjoiZ2VuZXJhbC9yZXN0LXNlcnZpY2VzL2V2ZW50UmVzdFNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
