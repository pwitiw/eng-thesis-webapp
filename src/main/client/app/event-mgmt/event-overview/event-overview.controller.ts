import {Event} from "../../general/interfaces/event.interface";
import {EventService} from "../event.service";
import {ToastService} from "../../general/toast/toast.service";

export class EventOverviewCtrl {
  private events: Event[];
  private workerCode: number;
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;
  private id:number;

  constructor(private eventService: EventService, private toastService: ToastService, $stateParams) {
    this.id = $stateParams.id;
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    if(this.id == "") {
      this.findAll();
    } else {
      this.findForId(this.id);
    }

  }

  findAll(): void {
    var that = this;
    this.eventService.findAll().then(function(response){
      if(response.status == 200) {
        that.events = response.data;
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania danych")
      }
    })
  }

  findForId(id: number): void {
    var that = this;
    this.eventService.findForWorker(id).then(function(response){
      if(response.status == 200) {
        that.events = response.data;
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania danych")
      }
    })
  }

  delete(orderId: number, positionId: number): void {
    var that = this;
    this.eventService.delete(orderId, positionId).then(function(response){
      if(response.status == 200) {
        var index = that.events.findIndex(response.data);
        that.events.splice(index, 1);
        that.toastService.showSimpleToast("success", "Element zostal usunięty")
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas usuwania danych")
      }
    })
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }
}
