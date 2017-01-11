import {CustomerRestService} from "../general/rest-services/customerRestService.service";
import {Customer} from "../general/interfaces/customer.interface";

export class CustomerService {

  constructor(private customerRestService: CustomerRestService, private $uibModal: any) {

  }

  findAll(): any {
    return this.customerRestService.getCustomers();
  }

  openModal(customer): any {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'CustomerModalCtrl',
      controllerAs: 'customerModalCtrl',
      templateUrl: 'customer-mgmt/components-modal/customer-modal.tpl.html',
      size: 'md',
      backdrop: 'static',
      resolve: {
        customer: function() {
          return customer
        }
      }
    };

    return that.$uibModal.open(modalObject).result;
  }
}
