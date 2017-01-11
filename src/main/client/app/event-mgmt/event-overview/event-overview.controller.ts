import {Event} from "../../general/interfaces/event.interface";
import {EventService} from "../event.service";
import {ToastService} from "../../general/toast/toast.service";

export class EventOverviewCtrl {
  private events: Event[];
  private workerCode: number;
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;

  constructor(private eventService: EventService, private toastService: ToastService) {
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.findAll();

  }

  findAll(): any {
    var that = this;
    this.eventService.findAll().then(function(data){
      that.events = data;
    })
  }

  delete(orderId: number, positionId: number): void {
    var that = this;
    this.eventService.delete(orderId, positionId).then(function(data){
      var index = that.events.findIndex(data);
      that.events.splice(index, 1);
    })
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }
}
