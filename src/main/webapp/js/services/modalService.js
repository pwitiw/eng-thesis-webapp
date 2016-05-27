angular.module('myApp').service('modalService', function ($uibModal) {

    this.openPopupModal = function (items) {

        var modalInstance = $uibModal.open({
            //animation: $scope.animationsEnabled,
            templateUrl: 'html/my-modal.html',
            controller: 'modalController',
            size: '',
            resolve: {
             items: function () {
             return items;
             }
             }
        });
    }
});