
export class ComponentsModalCtrl {

  header:string;

  private gridOptions:any;
  private gridApi:any;

  constructor(private $uibModal:any, private $uibModalInstance:any,) {
  }

  // private setHeader() {
  //   this.header = this.headerText;
  // }
  //
  // cancel() {
  //   this.$uibModalInstance.dismiss();
  // }
  //
  // select() {
  //   this.$uibModalInstance.close(this.gridApi.selection.getSelectedRows());
  // }
}
