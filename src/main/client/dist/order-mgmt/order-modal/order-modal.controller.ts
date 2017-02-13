import {Order} from "../../general/interfaces/order.interface";

export class OrderModalCtrl {
  private order: Order;
  private status = [{ id: 1, name: "Aktywny"}, { id: 0, name: "Nieaktywny"}];
  private type = [{ id: 1, name: "Express"}, { id: 0, name: "Normalny"}];
  private positions = [];
  private customers = [];

  constructor(private $uibModal:any, private $uibModalInstance:any, order, positions, customers) {
    var date = new Date(order.date);
    order.date = date;
    this.order = order;
    this.positions = positions;
    this.customers = customers;
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  ok(order) {
    this.$uibModalInstance.close(order);
  }
}
