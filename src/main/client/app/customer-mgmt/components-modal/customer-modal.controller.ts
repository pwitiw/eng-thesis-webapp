export class CustomerModalCtrl {

  private customer = {
    id: null,
    name: "",
    firstName: "",
    lastName: "",
  };

  private positions = [];

  constructor(private $uibModal:any, private $uibModalInstance:any, customer) {
    this.customer = customer;
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  ok(customer) {
    this.$uibModalInstance.close(customer);
  }
}
