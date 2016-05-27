angular.module('myApp').controller('modalController', function ($scope, $uibModalInstance, items) {


    $scope.header = items.header;
    $scope.body = items.body;
    //$scope.selected = {
    //    item: $scope.items[0]
    //};

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.isBodyArray = function(){
        console.log($.isArray($scope.body));
        return $.isArray($scope.body)
    }
});