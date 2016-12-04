var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'
]);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/',
        {
            templateUrl: "html/home.html",
            controller: ""
        })
        .when('/orders', {
            templateUrl: 'html/orders.html',
            controller: "orderController"
        })
        .when('/workers', {
            templateUrl: 'html/workers.html',
            controller: "workerController"
        })
        .when('/events/:workerCode', {
            templateUrl: 'html/events.html',
            controller: "eventController"
        })
        .when('/events', {
            templateUrl: 'html/events.html',
            controller: "eventController"
        })
        .when('/orders/components/:orderId', {
            templateUrl: 'html/components.html',
            controller: "componentController"
        })
        .otherwise({
            redirectTo: '/'
        });
})

app.factory('shareService', function () {
    var savedData = {}

    function set(data) {
        savedData = data;
    }

    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }

});

