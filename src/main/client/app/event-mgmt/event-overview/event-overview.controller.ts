import {Event} from "../../general/interfaces/event.interface";
import {EventService} from "../event.service";
import {ToastService} from "../../general/toast/toast.service";

export class EventOverviewCtrl {
  private events: Event[];
  private workerCode: number;
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;
  private id: number;
  private name: string;
  allMeters: number = 0;

  constructor(private eventService: EventService, private toastService: ToastService, $stateParams) {
    this.id = $stateParams.id;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.itemsByPage = 10;//this.paginationSizes[0];
    if (this.id == "") {
      this.findAll();
    } else {
      this.findForId(this.id);
    }

  }

  findAll(): void {
    var that = this;
    this.eventService.findAll().then(function (response) {
      if (response.status == 200) {
        that.events = response.data;
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania danych")
      }
    })
  }

  findForId(id: number): void {
    var that = this;
    this.eventService.findForWorker(id).then(function (response) {
      if (response.status == 200) {
        that.events = response.data.events;
        that.name = response.data.name + " " + response.data.surname;
        that.sumMeters(that.events);
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania danych")
      }
    })
  }

  delete(orderId: number, positionId: number): void {
    var that = this;
    this.eventService.delete(orderId, positionId).then(function (response) {
      if (response.status == 200) {
        var index = that.events.findIndex(event => (event.orderId === orderId) && (event.positionId === positionId));
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

  private sumMeters(events: Event[]) {
    events.forEach(item=> {
      this.allMeters += item.meters;

    })
    this.allMeters  = Math.round(this.allMeters * 100) / 100
  }
}
