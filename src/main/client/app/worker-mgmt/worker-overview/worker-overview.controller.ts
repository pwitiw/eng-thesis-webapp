import {Worker} from "../../general/interfaces/worker.interface";
import {WorkerService} from "../worker.service";
import IPromise = angular.IPromise;

export class WorkerOverviewCtrl {
  private worker: Worker[];
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;

  constructor(private workerService: WorkerService) {
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.findAll();
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

  addUser(): void {
    this.workerService.openModal();
  }

  editUser(id: number): void {
    var that = this;
    this.workerService.findOne(id).then(function(worker){
        that.workerService.openModal(worker);
    });
  }
}
utrb
