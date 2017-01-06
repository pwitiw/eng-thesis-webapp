
export class OrderModalCtrl {
  private order: any = {
    id: null,
    name: '',
    customer: '',
    position: '',
    date: '',
    express: null,      //express czy nie
    lastUpdate: '',
    parentId: null,
    active: ''
  };

  private status = [{ id: "1", name: "Aktywny"}, { id: "0", name: "Nieaktywny"}];

  private positions = [];

  constructor(private $uibModal:any, private $uibModalInstance:any, order, positions) {
    var date = new Date(order.date);
    order.date = date;
    this.order = order;
    this.positions = positions;
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  ok(order) {
    this.$uibModalInstance.close(order);
  }
}
