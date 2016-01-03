app.controller('workerController', function ($scope, $http, $route) {

    $http.get('/workers/all')
        .success(function (response) {
            $scope.workers = response;
        });

    $scope.editing = false;
    $scope.workerToDelete= null;
    $scope.sortType = 'code'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchFilter = '';

    $scope.positions = ['FREZERNIA', 'CZYSZCZCZENIE', 'PODKŁADOWANIE', 'SZLIFIERNIA', 'LAKIEROWANIE', 'PAKOWANIE'];

    $scope.posName = function (num) {
        return $scope.positions[num - 1];
    }

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
                $route.reload();
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

});