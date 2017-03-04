export class DeleteModalCtrl {
  private text;

  constructor(private $uibModal: any, private $uibModalInstance: any, text) {
    this.text = text;
  }

  cancel() {
    this.$uibModalInstance.close(false);
  }

  approve() {
    this.$uibModalInstance.close(true);
  }
}
