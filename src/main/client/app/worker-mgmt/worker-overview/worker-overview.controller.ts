import {Worker} from "../../general/interfaces/worker.interface";
import {WorkerService} from "../worker.service";
export class WorkerOverviewCtrl {
  worker: Worker[];
  displayed = [];
  itemsByPage: number;
  paginationSizes: any;

  constructor(private workerService: WorkerService) {
    this.itemsByPage = 5;
    this.worker = workerService.getWorker(); //TODO dajesz potem workerService.getWorker().findAll()
    this.paginationSizes = [5, 10, 15, 20, 25];
  }

  delete(id: number): void {
    alert("Usuniety z id = " + id);
    this.workerService.delete(id);
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }

  addUser(): void {
    this.workerService.clearUser();
    this.workerService.openModal();
  }

  editUser(id: number): void {
    this.workerService.findOne(id);
    this.workerService.openModal();
  }
}
