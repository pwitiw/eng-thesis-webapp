export class ToastService {

  constructor(private $mdToast: any) {
  }

  showSimpleToast(type: string, text: string) {
    var that = this;

    this.$mdToast.show({
      template:
      '<md-toast>' +
        '<div class="md-toast-content toast toast-' + type + '">' +
              text +
        '</div>' +
      '</md-toast>',
      position: 'top right',
      hideDelay: 3000
    });
  }

}
