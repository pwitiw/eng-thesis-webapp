import {Worker} from "../../general/interfaces/worker.interface";
import {WorkerService} from "../worker.service";
export class WorkerOverviewCtrl {
  worker: Worker;
  abc='test' ;

  constructor(private workerService: WorkerService) {
    //this.worker = workerService.findOne(2);
  }

  delete(id: number): void {
    this.workerService.delete(id);
  }
}
