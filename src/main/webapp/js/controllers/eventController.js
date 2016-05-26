app.controller('eventController', function ($scope, $http, $routeParams, $route) {

    $scope.worker_code = $routeParams.workerCode;

    $scope.positions = ['FREZERNIA', 'CZYSZCZCZENIE', 'PODKŁADOWANIE', 'SZLIFIERNIA', 'LAKIEROWANIE', 'PAKOWANIE'];

    $scope.posName = function (num) {
        return $scope.positions[num - 1];
    }

    if ($scope.worker_code == null) {
        $http.get('/events/all').success(function (response) {
            $scope.workerStats = false;
            $scope.events = response;
        });
    }
    else {
        $http.get('/events/' + $scope.worker_code).success(function (response) {
            $scope.workerStats = true;
            $scope.workerName = response.workerName;
            $scope.workerSurname = response.workerSurname;
            $scope.events = response.events;

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