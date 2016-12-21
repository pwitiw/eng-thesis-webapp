import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {Order} from "../general/interfaces/order.interface";

export class OrderService {
  private orders: Order[] = [
    {
      id: 1,
      orderId: '001TW',
      customer: 'Bootstrap',
      color: 'RAL2010',
      position: 'FREZERNIA',
      type: 'EXPRESS',
      date: '20 - 04 - 2017'
    },
    {
      id: 2,
      orderId: '002TW',
      customer: 'Angular',
      color: 'RAL2610',
      position: 'FREZERNIA',
      type: 'NORMALNY',
      date: '20 - 04 - 2017'
    },
    {
      id: 3,
      orderId: '003TW',
      customer: 'CHmiel',
      color: 'RAL2010',
      position: 'FREZERNIA',
      type: 'EXPRESS',
      date: '20 - 04 - 2017'
    },
    {
      id: 4,
      orderId: '004TW',
      customer: 'Angular',
      color: 'RAL2310',
      position: 'FREZERNIA',
      type: 'NORMALNY',
      date: '20 - 04 - 2017'
    },
    {
      id: 5,
      orderId: '005TW',
      customer: 'Angular',
      color: 'RAL2010',
      position: 'FREZERNIA',
      type: 'NORMALNY',
      date: '20 - 04 - 2017'
    },
    {
      id: 6,
      orderId: '006TW',
      customer: 'CHmiel',
      color: 'RAL2010',
      position: 'FREZERNIA',
      type: 'NORMALNY',
      date: '20 - 04 - 2017'
    }

  ];
  private sequencer = 1;

  constructor(private orderRestService: OrderRestService, private $uibModal: any) {

  }

  getOrders(): Order[] {
    return this.orders;
  }

  save(order: Order): any {
    this.orderRestService.save(order);
  }

  delete(id: number): any {
    this.orderRestService.delete(id);
  }

  findOne(id: number): any {
    return this.orderRestService.getOrder(id);
  }

  findAll(): any {
    return this.orderRestService.getOrders();
    //return this.books;
  }


  openModal() {
    let modalObject = {
      animation: true,
      controller: 'ComponentsModalCtrl',
      controllerAs: 'componentsModalCtrl',
      templateUrl: 'order-mgmt/components-modal/components-modal.html',
      size: 'md',
      resolve: {
        // headerText: () => {
        //   return header;
        // },
        // columnDefs: () => {
        //   return columnDefs;
        // },
        // data: () => {
        //   return data;
        // },
        // multiselect: () => {
        //   return multiselect || false;
        // },
        // gridMenu: () => {
        //   return gridMenu == null ? true : gridMenu;
        // }
      }
    };
    return this.$uibModal.open(modalObject);
  }


}
