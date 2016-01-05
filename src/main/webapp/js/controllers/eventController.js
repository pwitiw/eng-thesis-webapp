app.controller('eventController', function ($scope, $http, $routeParams) {

    $scope.worker_code = $routeParams.workerCode;

    $http.get('/events/' + $scope.worker_code).success(function (response) {
        $scope.events = response;
    });

});