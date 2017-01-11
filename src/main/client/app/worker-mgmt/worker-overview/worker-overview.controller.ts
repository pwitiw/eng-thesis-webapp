import {Worker} from "../../general/interfaces/worker.interface";
import {WorkerService} from "../worker.service";
import IPromise = angular.IPromise;

export class WorkerOverviewCtrl {
  private worker: Worker[];
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;
  private positions: any;

  constructor(private workerService: WorkerService) {
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.findPositions();
    this.findAll();
  }

  findPositions() {
    var that = this;
    this.workerService.findPositions().then(function(response) {
      that.positions = response.data;
    });
  }

  findAll(){
    var that = this;
    this.workerService.findAll().then(function(data) {
      that.worker = data;
    });
  }


  delete(id: number): void {
    var that = this;
    this.workerService.delete(id).then(function(){
      var index = that.worker.findIndex(worker => worker.id === id);
      that.worker.splice(index, 1);
    });
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }

  updateArray(worker: Worker, index): void {
    this.worker[index].name = worker.name;
    this.worker[index].surname = worker.surname;
    this.worker[index].position = worker.position;
    this.worker[index].code = worker.code;
    this.worker[index].active = worker.active;
  }

  addUser(): void {
    var that = this;
    this.workerService.openModal({},this.positions).then(
      //close
      function (result) {
          that.workerService.save(<Worker>result);
          that.worker.push(result);
      },
      //dismiss
      function (result) {

      }
    )
  }

  editUser(id: number): void {
    var that = this;
    this.workerService.findOne(id).then(function(worker){
        that.workerService.openModal(worker, that.positions).then(
          //close
          function (result) {
            that.workerService.update(result.id, <Worker>result);
            var index = that.worker.findIndex(worker => worker.id === result.id);
            that.updateArray(<Worker>result, index);
          },
          //dismiss
          function (result) {

          }
        )
    });
  }
}
