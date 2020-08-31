var app = angular.module("myApp", ['ngRoute','ngStorage']);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/view/entrada.html",
        controller : "entradaCtrl"
    })
    .when("/tr", {
        templateUrl : "app/view/tr.html",
        controller : "trCtrl"
    })
    .when("/pos", {
        templateUrl : "app/view/pos.html",
        controller : "posCtrl"
    });
    $locationProvider.html5Mode(true);
});
