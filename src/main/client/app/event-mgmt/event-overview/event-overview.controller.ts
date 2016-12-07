import {Event} from "../../general/interfaces/event.interface";
import {EventService} from "../event.service";
export class EventOverviewCtrl {
  event: Event;
  sda = 'test';

  constructor(private eventService: EventService) {

  }

  delete(id: number): void {
    this.eventService.delete(id);
  }
}
