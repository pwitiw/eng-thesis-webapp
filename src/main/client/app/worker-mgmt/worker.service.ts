import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {Worker} from "../general/interfaces/worker.interface";

export class WorkerService {
  //DO edycji pracownika
  private user: any = {
    active: null,
    id: null,
    code: null,
    name: "",
    surname: "",
    position: ""
  };

  constructor(private workerRestService: WorkerRestService, private $uibModal: any) {

  }

  save(worker: Worker): any {
    this.workerRestService.save(worker).then(function(data) {

    });
  }

  update(id: number, worker: Worker): void {
    this.workerRestService.update(id, worker);
  }

  delete(id: number): any {
    //this.worker.pop(); //usuwa ostatni element
    return this.workerRestService.delete(id);
  }

  findPositions(): any {
    return this.workerRestService.getPositions()
  }

  findOne(id: number): any {
    return this.workerRestService.getWorker(id);
  }

  findAll(): any {
    return this.workerRestService.getWorkers();
    //return this.books;
  }

  openModal(worker, positions): any {
    var that = this;

      let modalObject = {
        animation: true,
        controller: 'WorkerModalCtrl',
        controllerAs: 'workerModalCtrl',
        templateUrl: 'worker-mgmt/components-modal/worker-modal.tpl.html',
        size: 'md',
        backdrop: 'static',
        resolve: {
          user: function() {
            return worker
          },
          positions: function(){
            return positions;
          }
        }
      };

      return that.$uibModal.open(modalObject).result;
  }
}
