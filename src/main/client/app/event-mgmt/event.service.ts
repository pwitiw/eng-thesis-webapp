import {EventRestService} from "../general/rest-services/eventRestService.service";
import {Event} from "../general/interfaces/event.interface";

export class EventService {
  private event: Event[] = [
    {id: 1, title: 'Angular', author: 'Henryk Sienkiewicz'},
    {id: 2, title: 'Java', author: 'Maria Konopnicka'},
    {id: 3, title: 'Programming mysteries', author: 'Paulo Coelho'}
  ];
  private sequencer = 1;

  constructor(private orderRestService: EventRestService) {

  }

  save(event: Event): any {
    this.orderRestService.save(event);
  }

  delete(id: number): any {
    this.orderRestService.delete(id);
  }

  findOne(id: number): any {
    return this.orderRestService.getEvent(id);
  }

  findAll(): any {
    return this.orderRestService.getEvent();
    //return this.books;
  }
}
