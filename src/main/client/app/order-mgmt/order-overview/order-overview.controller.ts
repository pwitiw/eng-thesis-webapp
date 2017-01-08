import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";
import {ComponentsModalCtrl} from "../components-modal/components-modal.controller";
import {ComponentsModalService} from "../components-modal/components-modal.service";

export class OrderOverviewCtrl {
  orders: Order[];
  displayed = [];
  itemsByPage: number;
  paginationSizes: any;


  constructor(private orderService: OrderService, private $uibModal: any) {
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.findAll();
  }

  findAll(): void {
    var that = this;
    this.orderService.findAll().then(function(response) {
      if(response.status == 200) {
        that.orders = response.data;
      }
    })
  }

  delete(id: number): void {
    var that = this;
    this.orderService.delete(id).then(function(response) {
      if(response.status == 200) {
        var index = that.orders.findIndex(order => order.id === id);
        that.orders.splice(index, 1);
      }
    })
  }

  synchronize():void {
    this.orderService.openModal();
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }

  changeType(id: number): void {
    var that = this;
    this.orderService.changeType(id).then(function(response) {
      if(response.status == 200) {
        var index = that.orders.findIndex(order => order.id === id);
        that.orders[index].active ? that.orders[index].active = false : that.orders[index].active = true;
      }
    })
  }


  editOrder(id: number): void {
    var that = this;
    this.orderService.findOne(id).then(function(findOneResponse){
      if(findOneResponse.status == 200) {
        that.orderService.findPositions().then(function (positions) {
          if(positions.status == 200) {
            that.orderService.openModal(findOneResponse.data, positions.data).then(function (resultModal) {
              that.orderService.edit(resultModal.id, resultModal).then(function (editResponse) {
                if(editResponse.status == 200) {
                  var index = that.orders.findIndex(order => order.id === resultModal.id);
                  that.orders.splice(index, 1, resultModal);
                }
              });
            });
          }
        });
      }
    });
  }

  openComponents(id: number): void{
    var that = this;
    this.orderService.findOne(id).then(function(data) {
      that.orderService.openComponentModal(data)
    })
  }
}
