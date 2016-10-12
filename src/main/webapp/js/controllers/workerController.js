app.controller('workerController', function ($scope, $http, $route, orderService) {

    $http.get('/workers/all')
        .success(function (response) {
            $scope.workers = response;
            orderService.setPositionsAsStringForWorkers($scope.workers);
        });

    $scope.positions = ['FREZERNIA', 'CZYSZCZCZENIE', 'PODKŁADOWANIE', 'SZLIFIERNIA', 'LAKIEROWANIE', 'PAKOWANIE', 'UKOŃCZONE'];
    $scope.editing = false;
    $scope.workerToDelete= null;
    $scope.sortType = 'code'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchFilter = '';

    $scope.posAsNumber = function (pos) {
        for (i = 0; i < $scope.positions.length; i++) {
            if ($scope.positions[i] == pos)
                return i + 1;
        }
    }

    $scope.changesConfirmed = function (entry) {

        entry.position = $scope.posAsNumber(entry.position);

        $http.post('/workers/addChanges', entry, {headers: {'Content-Type': 'application/json'}})
            .success(function (response) {
                //$route.reload();
            })

    }

    $scope.deleteWorker = function (){

        $http.post('/workers/delete', $scope.workerToDelete, {headers: {'Content-Type': 'application/json'}})
            .success(function(response){
                $route.reload();
            })
    }

    $scope.setWorkerToDelete = function(worker){
        $scope.workerToDelete = worker;
    }

    $scope.submit = function(form){
        if(!form.$valid){
            return;
        }
    }

    $scope.addWorker = function(worker){
        worker.position = $scope.posAsNumber(worker.position);

        $http.post('/workers/addWorker', worker, {headers: {'Content-Type': 'application/json'}})
            .success(function (response) {
                $route.reload();
            })
    }



});