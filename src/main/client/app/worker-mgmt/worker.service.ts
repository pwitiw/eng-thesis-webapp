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

  findOne(id: number): any {
    return this.workerRestService.getWorker(id);
  }

  findAll(): any {
    return this.workerRestService.getWorkers();
    //return this.books;
  }

  openModal(worker): void {
    var that = this;

    this.workerRestService.getPositions().then(function(positions){
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

      var modalInstance = that.$uibModal.open(modalObject);

      modalInstance.result.then(
        //close
        function (result) {
          let newWorker = {
            id: result.id,
            active: 1, //ustawienie na aktywnego
            code: result.code,
            name: result.name,
            surname: result.surname,
            position: result.position
          };
          if( typeof result.id === 'undefined' || result.id === null ) {
            that.save(<Worker>newWorker);
          } else {
            that.update(result.id, <Worker>newWorker);
          }

        },
        //dismiss
        function (result) {

        }
      )
    });
  }
}
