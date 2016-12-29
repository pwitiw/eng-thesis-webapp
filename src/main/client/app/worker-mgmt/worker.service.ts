import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {Worker} from "../general/interfaces/worker.interface";

export class WorkerService {
  //DO edycji pracownika
  private user: any = {
    firstName: "",
    surname: "",
    position: ""
  };
  //zamiast restowego api
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
  constructor(private workerRestService: WorkerRestService, private $uibModal: any) {

  }

  //tylko, jak nie ma restowegoapi
  getWorker(): Worker[] {
    return this.worker;
  }

  save(worker: Worker): any { //TODO ja bym sprawdzał kod w bazie i brał +1 po prostu
    this.worker.push(worker);
    //this.workerRestService.save(worker);
  }

  delete(id: number): any {
    this.worker.pop(); //usuwa ostatni element
    //this.workerRestService.delete(id);
  }

  findOne(id: number): any {
    //TODO zamiast this.worker[id-1] dajesz this.workerRestService.getWorker(id)
    var worker = this.worker[id-1]; //-1, bo tablica obecnie
    this.user = {
      firstName: worker.firstName,
      surname: worker.surname,
      position: worker.position
    };
    //return this.workerRestService.getWorker(id);
  }

  findAll(): any {
    return this.workerRestService.getWorkers();
    //return this.books;
  }

  clearUser(): void {
    this.user = {
      firstName: "",
      surname: "",
      position: ""
    }
  }

  openModal() {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'WorkerModalCtrl',
      controllerAs: 'workerModalCtrl',
      templateUrl: 'worker-mgmt/components-modal/worker-modal.tpl.html',
      size: 'md',
      resolve: {
        user: that.user
      }
    };

    var modalInstance = this.$uibModal.open(modalObject);

    modalInstance.result.then(
      //close
      function (result) {
        let newWorker = {
          code: 234,  //TODO ja bym sprawdzał kod w bazie i brał +1 po prostu
          firstName: result.firstName,
          surname: result.surname,
          position: result.position
        };
        that.save(<Worker>newWorker);
      },
      //dismiss
      function (result) {

      }
    )
  }
}
