
export class OrderModalCtrl {
  private order: any = {
    orderId: '',
    customer: '',
    color: '',
    position: '',
    type: '',
    date: ''
  };

  constructor(private $uibModal:any, private $uibModalInstance:any, order) {
    this.order = order;
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  ok(orderId, customer, color, position, type, date) {
    let order = {
      orderId: orderId,
      customer: customer,
      color: color,
      position: position,
      type: type,
      date: date
    };
    this.$uibModalInstance.close(order);
  }
}
