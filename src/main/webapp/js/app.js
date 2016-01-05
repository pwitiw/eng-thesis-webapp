var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/',
        {
            templateUrl: "html/home.html",
            controller: ""
        })
        .when('/orders/all',{
            templateUrl: 'html/orders.html',
            controller: "orderController"
        })
        .when('/workers/all',{
            templateUrl: 'html/workers.html',
            controller: "workerController"
        })
        .when('/events/:workerCode',{
            templateUrl: 'html/events.html',
            controller: "eventController"
        })
        .otherwise({
            redirectTo : '/'
        });
})

