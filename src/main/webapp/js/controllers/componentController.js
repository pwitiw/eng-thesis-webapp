app.controller('componentController', function ($scope, $http, $routeParams) {

    $scope.orderId = $routeParams.orderId;
    $scope.headers = [' Lp.', 'Wysokość', 'Szerokosc', 'Ilość', 'Brakujące', 'Opis'];

    $http.get('/orders/'+ $scope.orderId, {
        params: {id: $scope.orderId}
    })
        .success(function (response) {
            $scope.order = response;
        })

    $http.get('/orders/' + $scope.orderId + '/components').success(function (response) {
        $scope.components = response;
    });


});