app.controller('orderController', function ($scope, $http) {


    $http.get('/orders/all')
        .success(function (response) {
        $scope.orders = response;
    })


   $scope.isMissing = function(missing){
       return missing == 1 ? 'TAK': '-';
   }

});