import {Worker} from "../../general/interfaces/worker.interface";
import {WorkerService} from "../worker.service";
export class WorkerOverviewCtrl {
  worker: Worker[];
  itemsByPage: number;

  constructor(private workerService: WorkerService) {
    this.itemsByPage = 10;
    this.worker = workerService.getWorker();
  }

  delete(id: number): void {
    this.workerService.delete(id);
  }
}
