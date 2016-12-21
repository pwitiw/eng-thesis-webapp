export class ComponentsModalService {

  /* @ngInject */
  constructor(private $uibModal: any) {
  }

  open(header: string, columnDefs: any, data: any, multiselect?: boolean, gridMenu?: boolean) {
    let modalObject = {
      animation: true,
      controller: 'ComponentsModalCtrl',
      controllerAs: 'componentsModal',
      templateUrl: 'order-mgmt/components-modal/-component-modal.html',
      size: 'md',
      resolve: {
        headerText: () => {
          return header;
        },
        columnDefs: () => {
          return columnDefs;
        },
        data: () => {
          return data;
        },
        multiselect: () => {
          return multiselect || false;
        },
        gridMenu: () => {
          return gridMenu == null ? true : gridMenu;
        }
      }
    };
    return this.$uibModal.open(modalObject);
  }


}
