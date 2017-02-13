import {EventRestService} from "../general/rest-services/eventRestService.service";
import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {Event} from "../general/interfaces/event.interface";
import {Worker} from "../general/interfaces/worker.interface";
export class EventService {
  constructor(private eventRestService: EventRestService, private workerRestService: WorkerRestService) {

  }

  delete(orderId: number, positionId: number): any {
    return this.eventRestService.delete(orderId, positionId);
  }

  findAll(): any {
    return this.eventRestService.getEvents();
  }

  findForWorker(id:number): any {
    return this.workerRestService.getEvents(id);
  }
}
