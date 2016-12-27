
import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {Worker} from "../general/interfaces/worker.interface";
export class WorkerService {
  private worker: Worker[] = [
    {id: 1, code: 101, firstName: 'Adam', surname: 'Ugfsfd', position: "Pakowacz"},
    {id: 2, code: 102, firstName: 'Artur', surname: 'Ksdfsdfds', position: "Monter"},
    {id: 3, code: 103, firstName: 'Andrzej', surname: 'VCfdf', position: "Cokolwiek"},
    {id: 4, code: 104, firstName: 'Alojzy', surname: 'Zse', position: "Siedzi"},
    {id: 5, code: 105, firstName: 'Bernard', surname: 'Qwa', position: "CosRobi"},
    {id: 6, code: 106, firstName: 'Kazimierz', surname: 'Ifd', position: "ResztaPakuje"},
    {id: 7, code: 107, firstName: 'Wiesław', surname: 'Tdfd', position: "Pakowacz"},
    {id: 8, code: 108, firstName: 'Stanisław', surname: 'Sdasd', position: "Pakowacz"},
    {id: 9, code: 109, firstName: 'Włodzimierz', surname: 'Marrr', position: "Pakowacz"},
    {id: 10, code: 110, firstName: 'Amadeusz', surname: 'Adss', position: "Pakowacz"},
    {id: 11, code: 111, firstName: 'Konstanty', surname: 'Kss', position: "Pakowacz"},
    {id: 12, code: 112, firstName: 'Hira', surname: 'Huytew', position: "Pakowacz"},
    {id: 13, code: 113, firstName: 'Michał', surname: 'Sass', position: "Pakowacz"},
    {id: 14, code: 114, firstName: 'Tomasz', surname: 'Kus', position: "Pakowacz"},
    {id: 15, code: 115, firstName: 'Pali', surname: 'Woda', position: "Pakowacz"},
  ];
  constructor(private workerRestService: WorkerRestService) {

  }

  getWorker(): Worker[] {
    return this.worker;
  }

  save(worker: Worker): any {
    this.worker.push(worker);
    //this.workerRestService.save(worker);
  }

  delete(id: number): any {
    this.worker.pop(); //usuwa ostatni element
    //this.workerRestService.delete(id);
  }

  findOne(id: number): any {
    return this.workerRestService.getWorker(id);
  }

  findAll(): any {
    return this.workerRestService.getWorkers();
    //return this.books;
  }
}
