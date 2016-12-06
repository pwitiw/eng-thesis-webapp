
import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {Worker} from "../general/interfaces/worker.interface";
export class WorkerService {
  private worker: Worker[] = [
    {id: 1, title: 'Angular', author: 'Henryk Sienkiewicz'},
    {id: 2, title: 'Java', author: 'Maria Konopnicka'},
    {id: 3, title: 'Programming mysteries', author: 'Paulo Coelho'}
  ];
  constructor(private workerRestService: WorkerRestService) {

  }

  save(worker: Worker): any {
    this.workerRestService.save(worker);
  }

  delete(id: number): any {
    this.workerRestService.delete(id);
  }

  findOne(id: number): any {
    return this.workerRestService.getWorker(id);
  }

  findAll(): any {
    return this.workerRestService.getWorkers();
    //return this.books;
  }
}
