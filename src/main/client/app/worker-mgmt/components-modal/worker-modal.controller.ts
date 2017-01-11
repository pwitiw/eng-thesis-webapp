export class WorkerModalCtrl {

  private user = {
    active: null,
    id: null,
    code: null,
    name: "",
    surname: "",
    position: ""
  };

  private positions = [];

  constructor(private $uibModal:any, private $uibModalInstance:any, user, positions) {
    this.user = user;
    this.positions = positions;
  }

  cancel() {
     this.$uibModalInstance.dismiss();
  }

  ok(worker) {
    this.$uibModalInstance.close(worker);
  }
}
