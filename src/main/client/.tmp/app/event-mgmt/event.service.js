"use strict";
var EventService = (function () {
    function EventService(eventRestService) {
        this.eventRestService = eventRestService;
        this.events = [
            { id: 1, title: 'Angular', author: 'Henryk Sienkiewicz' },
            { id: 2, title: 'Java', author: 'Maria Konopnicka' },
            { id: 3, title: 'Programming mysteries', author: 'Paulo Coelho' }
        ];
        this.sequencer = 1;
    }
    EventService.prototype.getEvent = function () {
        return this.events;
    };
    EventService.prototype.save = function (event) {
        this.eventRestService.save(event);
    };
    EventService.prototype.delete = function (id) {
        this.eventRestService.delete(id);
    };
    EventService.prototype.findOne = function (id) {
        return this.eventRestService.getEvent(id);
    };
    EventService.prototype.findAll = function () {
        return this.eventRestService.getEvents();
        //return this.books;
    };
    return EventService;
}());
exports.EventService = EventService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFRRSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUMsV0FBTSxHQUFZO1lBQ3hCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBQztZQUN2RCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUM7WUFDbEQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDO1NBQ2hFLENBQUM7UUFDTSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBSXRCLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxLQUFZO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekMsb0JBQW9CO0lBQ3RCLENBQUM7SUFDSCxtQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksb0JBQVksZUFnQ3hCLENBQUEiLCJmaWxlIjoiZXZlbnQtbWdtdC9ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
