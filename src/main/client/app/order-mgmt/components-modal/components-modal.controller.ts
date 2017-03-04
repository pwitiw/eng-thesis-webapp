import {OrderRestService} from "../../general/rest-services/orderRestService.service";
import {ToastService} from "../../general/toast/toast.service";

export class ComponentsModalCtrl {
  private components = [];
  private component = {
    "id": null,
    "orderName": "",
    "width": null,
    "height": null,
    "amount": null,
    "missing": null,
    "comment": ""
  };
  private order: any;
  private orderName: string;
  private displayed = [];
  private editMode = false;

  constructor(private orderRestService: OrderRestService, private $uibModalInstance:any, order, orderName, private toastService: ToastService) {
    this.order = order;
    this.components = order.components;
    this.orderName = orderName;
  }

  editComponent(component) {
    this.component = component;
    this.editMode = true;
  }

  add() {
    this.component = null;
    this.editMode = true;
  }

  save(component) {
    if(typeof component.id !== 'undefined' && component.id !== null) {
      var index = this.components.findIndex(c => c.id === component.id);
      this.components.splice(index, 1, component);
    } else {
      component.orderName = this.orderName;
      this.components.push(component);
    }
    this.component = null;
    this.editMode = false;
  }

  back() {
    this.component = null;
    this.editMode = false;
  }

  delete(component) {
    if(typeof component.id !== 'undefined' && component.id !== null) {
      var index = this.components.findIndex(c => c.id === component.id);
      this.components.splice(index, 1);
    } else {
      var index = this.components.findIndex(c => (c.orderName === component.orderName)
                                            && (c.width === component.width)
                                            && (c.height === component.height)
                                            && (c.amount === component.amount)
                                            && (c.missing === component.missing)
                                            && (c.comment === component.comment));
      this.components.splice(index, 1);
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  ok() {
    this.order.components = this.components;
    var that = this;
    this.orderRestService.edit(this.order.id, this.order).then(function(response){
      if(response.status == 200) {
        that.$uibModalInstance.close(true);
        that.toastService.showSimpleToast("success", "Poprawnie zauktualizowano elementy");
      } else {
        that.$uibModalInstance.dismiss();
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas aktualizacji elementów");
      }
    });

  }
}
