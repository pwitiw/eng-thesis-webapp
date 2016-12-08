import {EventRestService} from "../general/rest-services/eventRestService.service";
import {Event} from "../general/interfaces/event.interface";

export class EventService {
  private events: Event[] = [
    {id: 1, title: 'Angular', author: 'Henryk Sienkiewicz'},
    {id: 2, title: 'Java', author: 'Maria Konopnicka'},
    {id: 3, title: 'Programming mysteries', author: 'Paulo Coelho'}
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
    this.eventRestService.delete(id);
  }

  findOne(id: number): any {
    return this.eventRestService.getEvent(id);
  }

  findAll(): any {
    return this.eventRestService.getEvents();
    //return this.books;
  }
}
