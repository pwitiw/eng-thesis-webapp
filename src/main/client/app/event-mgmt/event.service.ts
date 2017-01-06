import {EventRestService} from "../general/rest-services/eventRestService.service";
import {Event} from "../general/interfaces/event.interface";
import {Worker} from "../general/interfaces/worker.interface";
export class EventService {
  constructor(private eventRestService: EventRestService) {

  }

  delete(orderId: number, positionId: number): any {
    return this.eventRestService.deleteEvent(orderId, positionId);
  }


  findAll(): any {
    return this.eventRestService.getEvents();
  }
}
