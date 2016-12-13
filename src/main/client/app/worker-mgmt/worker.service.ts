
import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {Worker} from "../general/interfaces/worker.interface";
export class WorkerService {
  private worker: Worker[] = [
    {code: 101, firstName: 'Adam', surname: 'Ugfsfd', position: "Pakowacz"},
    {code: 102, firstName: 'Artur', surname: 'Ksdfsdfds', position: "Monter"},
    {code: 103, firstName: 'Andrzej', surname: 'VCfdf', position: "Cokolwiek"},
    {code: 104, firstName: 'Alojzy', surname: 'Zse', position: "Siedzi"},
    {code: 105, firstName: 'Bernard', surname: 'Qwa', position: "CosRobi"},
    {code: 106, firstName: 'Kazimierz', surname: 'Ifd', position: "ResztaPakuje"},
    {code: 107, firstName: 'Wiesław', surname: 'Tdfd', position: "Pakowacz"},
    {code: 108, firstName: 'Stanisław', surname: 'Sdasd', position: "Pakowacz"},
    {code: 109, firstName: 'Włodzimierz', surname: 'Marrr', position: "Pakowacz"},
    {code: 110, firstName: 'Amadeusz', surname: 'Adss', position: "Pakowacz"},
    {code: 111, firstName: 'Konstanty', surname: 'Kss', position: "Pakowacz"},
    {code: 112, firstName: 'Hira', surname: 'Huytew', position: "Pakowacz"},
    {code: 113, firstName: 'Michał', surname: 'Sass', position: "Pakowacz"},
    {code: 114, firstName: 'Tomasz', surname: 'Kus', position: "Pakowacz"},
    {code: 115, firstName: 'Pali', surname: 'Woda', position: "Pakowacz"},
  ];
  constructor(private workerRestService: WorkerRestService) {

  }

  getWorker(): Worker[] {
    return this.worker;
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
