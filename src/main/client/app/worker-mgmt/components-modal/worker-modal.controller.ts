export class WorkerModalCtrl {

  private user = {
    firstName: "",
    surname: "",
    position: ""
  };

  constructor(private $uibModal:any, private $uibModalInstance:any, user) {
    this.user = user;
  }

  cancel() {
     this.$uibModalInstance.dismiss();
  }

  ok(firstName, surname, position) {
    let worker = {
      firstName: firstName,
      surname: surname,
      position: position
    };
    this.$uibModalInstance.close(worker);
  }
}
