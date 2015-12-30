app.controller('workerController', function($scope, $http){

    $http.get('/workers/all')
        .success(function(response){
            $scope.workers = response;
        })


});