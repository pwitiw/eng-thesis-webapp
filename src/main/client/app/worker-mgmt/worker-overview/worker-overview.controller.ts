import {Worker} from "../../general/interfaces/worker.interface";
import {WorkerService} from "../worker.service";
export class WorkerOverviewCtrl {
  worker: Worker;
  sda:'DZIALA CZY NIE';

  constructor(private workers: Worker[], private workerService: WorkerService) {
  }

  delete(id: number): void {
    this.workerService.delete(id);
  }
}
