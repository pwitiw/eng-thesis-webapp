angular.module('myApp').service('orderService', function () {

    positions = ['FREZERNIA', 'CZYSZCZCZENIE', 'PODKŁADOWANIE', 'SZLIFIERNIA', 'LAKIEROWANIE', 'PAKOWANIE', 'UKOŃCZONE'];
    this.express = ['TAK', '-'];

    posName = function (num) {
        if (num > 0)
            return positions[num - 1];
        else
            return 'BRAKUJĄCY';
    };

    this.setPositionsAsStringForOrder = function (orders) {
        for (i = 0; i < orders.length; i++) {
            orders[i].stage = posName(orders[i].stage);
        }
    };

    this.setPositionsAsStringForEntity = function (events) {
        for (i = 0; i < events.length; i++) {
            events[i].prim.stage = posName(events[i].prim.stage);
        }
    };

    this.setPositionsAsStringForWorkers = function (workers) {
        for (i = 0; i < workers.length; i++) {
            workers[i].position = posName(workers[i].position);
        }
    };

    this.setExpressAsString = function (orders) {
        for (i = 0; i < orders.length; i++) {
            orders[i].express = isExpress(orders[i].express);
        }
    };

    isExpress = function (express) {
        return express == 1 ? 'TAK' : '-';
    };

    isExpress = function (express) {
        return express == 1 ? 'TAK' : '-';
    };

    convertExpress = function (express) {
        return express == 'TAK' ? 1 : 0;
    };

    this.convertOrdersToSavingForm = function (order) {
        order.express = convertExpress(order.express);
    };

});