import {CustomerRestService} from "../general/rest-services/customerRestService.service";
import {Customer} from "../general/interfaces/customer.interface";

export class CustomerService {

  constructor(private customerRestService: CustomerRestService, private $uibModal: any) {

  }

  findAll(): any {
    return this.customerRestService.getCustomers();
  }
}
