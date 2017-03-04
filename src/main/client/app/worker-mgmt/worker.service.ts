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
    return this.workerRestService.save(worker);
  }

  update(id: number, worker: Worker): any {
    return this.workerRestService.update(id, worker);
  }

  deleteModal(): any {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'DeleteModalCtrl',
      controllerAs: 'deleteModalCtrl',
      templateUrl: 'general/template/delete-modal.tpl.html',
      size: 'sm',
      backdrop: 'static',
      resolve: {
        text: function () {
          return 'Czy chcesz usunąć pracownika?';
        }
      }
    };


    return that.$uibModal.open(modalObject).result;
  }

  delete(id: number): any {
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
  }

  openModal(worker, positions): any {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'WorkerModalCtrl',
      controllerAs: 'workerModalCtrl',
      templateUrl: 'worker-mgmt/worker-modal/worker-modal.tpl.html',
      size: 'md',
      backdrop: 'static',
      resolve: {
        user: function () {
          return worker
        },
        positions: function () {
          return positions;
        }
      }
    };

    return that.$uibModal.open(modalObject).result;
  }
}
