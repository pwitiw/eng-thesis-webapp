import {EventRestService} from "../general/rest-services/eventRestService.service";
import {Event} from "../general/interfaces/event.interface";
import {Worker} from "../general/interfaces/worker.interface";
export class EventService {
  private wor: Worker = <Worker>{id: 1, code: 101, firstName: 'Adam', surname: 'Ugfsfd', position: "Pakowacz"};
  private events: Event[] = [
    {id: 1, orderNumber: 21, orderStage: 1, worker: this.wor, element: 2, date: "12-12-2012 12:12:12"},
    {id: 2, orderNumber: 17, orderStage: 4, worker: this.wor, element: 2, date: "12-12-2012 12:12:12"},
    {id: 3, orderNumber: 15, orderStage: 2, worker: this.wor, element: 2, date: "12-12-2012 12:12:12"},
    {id: 4, orderNumber: 13, orderStage: 5, worker: this.wor, element: 2, date: "12-12-2012 12:12:12"},
    {id: 5, orderNumber: 1, orderStage: 2, worker: this.wor, element: 2, date: "12-12-2012 12:12:12"},
    {id: 6, orderNumber: 12, orderStage: 7, worker: this.wor, element: 2, date: "12-12-2012 12:12:12"},
    {id: 7, orderNumber: 11, orderStage: 2, worker: this.wor, element: 2, date: "12-12-2012 12:12:12"},
  ];
  private sequencer = 1;

  constructor(private eventRestService: EventRestService) {

  }

  getEvent(): Event[] {
    return this.events;
  }

  save(event: Event): any {
    this.eventRestService.save(event);
  }

  delete(id: number): any {
    this.events.pop();
    //this.eventRestService.delete(id);
  }

  findOne(id: number): any {
    return this.eventRestService.getEvent(id);
  }

  findAll(): any {
    return this.eventRestService.getEvents();
    //return this.books;
  }
}
