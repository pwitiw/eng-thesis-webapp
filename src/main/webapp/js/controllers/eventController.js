app.controller('eventController', function ($scope, $http, $routeParams, $route, orderService) {

    $scope.worker_code = $routeParams.workerCode;

    if ($scope.worker_code == null) {
        $http.get('/events').success(function (response) {
            $scope.workerStats = false;
            $scope.events = response;
            orderService.setPositionsAsStringForEntity($scope.events);
        });
    }
    else {
        $http.get('/events/' + $scope.worker_code).success(function (response) {
            $scope.workerStats = true;
            $scope.workerName = response.workerName;
            $scope.workerSurname = response.workerSurname;
            $scope.events = response.events;
            orderService.setPositionsAsStringForEntity($scope.events);
        });
    }
    $scope.setEventToDelete = function (event) {
        $scope.eventToDelete = event;
    }

    $scope.deleteEvent = function () {

        $http.post('/events/delete', $scope.eventToDelete, {headers: {'Content-Type': 'application/json'}})
            .success(function (response) {
                $route.reload();
            })
    }

});