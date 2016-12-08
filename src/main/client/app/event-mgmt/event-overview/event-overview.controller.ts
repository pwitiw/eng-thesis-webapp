import {Event} from "../../general/interfaces/event.interface";
import {EventService} from "../event.service";

export class EventOverviewCtrl {
  events: Event[];
  sample='sampmle';

  constructor(private eventService: EventService) {
    // this.events = eventService.getEvent();
  }

  delete(id: number): void {
    this.eventService.delete(id);
  }
}
