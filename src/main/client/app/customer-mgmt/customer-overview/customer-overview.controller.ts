import {Customer} from "../../general/interfaces/customer.interface";
import {CustomerService} from "../customer.service";
import IPromise = angular.IPromise;

export class CustomerOverviewCtrl {
  private customers: Customer[];
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;

  constructor(private customerService: CustomerService) {
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.findAll();
  }

  findAll(){
    var that = this;
    this.customerService.findAll().then(function(response) {
      if(response.status == 200) {
        that.customers = response.data;
      }
    });
  }

  delete(id: number): void {
    var that = this;
    var index = that.customers.findIndex(customer => customer.id === id);
    that.customers.splice(index, 1);
  }

  addCustomer(): void {
    var that = this;
    this.customerService.openModal({}).then(
      //close
      function (result) {
        alert("Dodalem " + JSON.stringify(result));
      },
      //dismiss
      function (result) {

      }
    )
  }

  editCustomer(id: number): void {
    alert("edycja")
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }
}
