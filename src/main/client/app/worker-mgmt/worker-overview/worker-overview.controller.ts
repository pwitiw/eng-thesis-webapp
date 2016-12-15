import {Worker} from "../../general/interfaces/worker.interface";
import {WorkerService} from "../worker.service";
export class WorkerOverviewCtrl {
  worker: Worker[];
  itemsByPage: number;
  paginationSizes: any;

  constructor(private workerService: WorkerService) {
    this.itemsByPage = 5;
    this.worker = workerService.getWorker();
    this.paginationSizes = [5, 10, 15, 20, 25];
  }

  delete(id: number): void {
    this.workerService.delete(id);
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }
}
