
export class DeleteModalCtrl {

  constructor(private $uibModal:any, private $uibModalInstance:any) {
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  yes() {
    this.$uibModalInstance.close();
  }
}
