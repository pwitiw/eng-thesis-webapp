import {Customer} from "../../general/interfaces/customer.interface";
import {CustomerService} from "../customer.service";
import {ToastService} from "../../general/toast/toast.service";
import IPromise = angular.IPromise;

export class CustomerOverviewCtrl {
  private customers: Customer[];
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;

  constructor(private customerService: CustomerService, private toastService: ToastService) {
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.findAll();
  }

  findAll(){
    var that = this;
    this.customerService.findAll().then(function(response) {
      if(response.status == 200) {
        that.customers = response.data;
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania klientów");
      }
    });
  }

  delete(id: number): void {
    var that = this;
    this.customerService.delete(id).then(function(response){
      if(response.status == 200) {
        var index = that.customers.findIndex(customer => customer.id === id);
        that.customers.splice(index, 1);
        that.toastService.showSimpleToast("success", "Poprawnie usunięto klienta");
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas usuwania klienta");
      }
    });

  }

  addCustomer(): void {
    var that = this;
    this.customerService.openModal({}).then(
      //close
      function (result) {
        that.customerService.save(<Customer>result).then(function(response){
          if(response.status == 200){
            that.customers.push(<Customer>response.data);
            that.toastService.showSimpleToast("success", "Poprawnie dodano klienta");
          } else {
            that.toastService.showSimpleToast("error", "Wystąpił błąd podczas dodawania klienta");
          }
        });
      },
      //dismiss
      function (result) {

      }
    )
  }

  editCustomer(id: number): void {
    var that = this;
    this.customerService.findOne(id).then(function(customerData){
      if(customerData.status == 200) {
        that.customerService.openModal(customerData.data).then(
          //close
          function (result) {
            that.customerService.save(<Customer>result).then(function (response) {
              if (response.status == 200) {
                var index = that.customers.findIndex(customer => customer.id === response.data.id);
                that.updateArray(index, response.data)
                that.toastService.showSimpleToast("success", "Poprawnie zaktualizowano dane klienta");
              } else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas edycji danych klienta");
              }
            });
          },
          //dismiss
          function (result) {

          }
        )
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania danych klienta");
      }
    });
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }

  updateArray(index: number, customer: Customer): void {
    this.customers[index].name = customer.name;
    this.customers[index].firstName = customer.firstName;
    this.customers[index].lastName = customer.lastName;
  }
}
