app.controller('orderController', function ($scope, $http, $route, $location, modalService, shareService) {

    $scope.positions = ['FREZERNIA', 'CZYSZCZCZENIE', 'PODKŁADOWANIE', 'SZLIFIERNIA', 'LAKIEROWANIE', 'PAKOWANIE', 'UKOŃCZONE'];
    $scope.yesNo = ['NIE', 'TAK'];
    $scope.orders = [];


    $http.get('/orders/all')
        .success(function (response) {
            $scope.orders = response;
            $scope.setValues();
        });

    $scope.posName = function (num) {
        return $scope.positions[num - 1];
    };

    $scope.isExpress = function (missing) {
        return missing == 1 ? 'TAK' : '-';
    };

    $scope.isActive = function (active) {
        return active == 1 ? true : false;
    };

    $scope.changeStatus = function (id) {
        $http.get('/orders/changeStatus?id=' + id)
            .success(function () {
                $route.reload();
            })
    };

    $scope.synchronize = function (id) {
        items = {
            header: 'Zsynchronizowane Zamówienia',
            body: []
        }

        $http.get('/synchronize')
            .success(function (response) {
                $route.reload();
                if (response.length == 0)
                    items.body = 'Brak zamówień do synchronizacji.';
                else
                    items.body = response;

                modalService.openPopupModal(items);
            }).error(function (response) {
                $route.reload();
                items.body = 'Operacja nie powiodła się.';
                modalService.openPopupModal(items);
            })

    };

    $scope.getIndexOf = function (order) {
        return orders.indexOf(order);
    }

    $scope.setOrderToDelete = function (order) {
        $scope.orderToDelete = order;
    };

    $scope.deleteOrder = function () {

        $http.post('/orders/delete', $scope.orderToDelete, {headers: {'Content-Type': 'application/json'}})
            .success(function (response) {
                $route.reload();
            })
    };

    $scope.changesConfirmed = function (entry) {

        $http.post('/orders/addChanges', entry, {headers: {'Content-Type': 'application/json'}})
            .success(function (response) {
                $route.reload();
            })
    };

    $scope.setValues = function () {
        $scope.totalItems = $scope.orders.length;
    };

    $scope.viewby = 10;
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5; //Number of pager buttons to show
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.setItemsPerPage = function (num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first paghe
    };

    $scope.orderIndex = 1 * $scope.currentPage;

    $scope.getOrderIndex = function () {
        return $scope.orderIndex++;
    };

    $scope.getActivity = function (isActive) {
        return isActive == 1 ? 'AKTYWUJ' : 'DEZAKTYWUJ';
    }

    $scope.getComponentsViewForOrder = function (order) {

        shareService.set(order);
        $location.path('/orders/components/' + order.id);
    }


});