/**
 * Created by vemilov on 2.12.2015 г..
 */
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../views/partial-home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': {templateUrl: '../views/partial-about.html'},
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: '../views/table-data.html',
                    controller: 'scotchController'
                }
            }

        });

});

routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});