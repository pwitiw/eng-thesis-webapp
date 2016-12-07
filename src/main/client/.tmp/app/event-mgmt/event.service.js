"use strict";
var EventService = (function () {
    function EventService(orderRestService) {
        this.orderRestService = orderRestService;
        this.event = [
            { id: 1, title: 'Angular', author: 'Henryk Sienkiewicz' },
            { id: 2, title: 'Java', author: 'Maria Konopnicka' },
            { id: 3, title: 'Programming mysteries', author: 'Paulo Coelho' }
        ];
        this.sequencer = 1;
    }
    EventService.prototype.save = function (event) {
        this.orderRestService.save(event);
    };
    EventService.prototype.delete = function (id) {
        this.orderRestService.delete(id);
    };
    EventService.prototype.findOne = function (id) {
        return this.orderRestService.getEvent(id);
    };
    EventService.prototype.findAll = function () {
        return this.orderRestService.getEvent();
        //return this.books;
    };
    return EventService;
}());
exports.EventService = EventService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFRRSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUMsVUFBSyxHQUFZO1lBQ3ZCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBQztZQUN2RCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUM7WUFDbEQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDO1NBQ2hFLENBQUM7UUFDTSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBSXRCLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssS0FBWTtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLG9CQUFvQjtJQUN0QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLG9CQUFZLGVBNEJ4QixDQUFBIiwiZmlsZSI6ImV2ZW50LW1nbXQvZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
