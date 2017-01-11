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
    this.customerService.findAll().then(function(data) {
      that.customers = data;
    });
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }
}
