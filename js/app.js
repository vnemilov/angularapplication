/**
 * Created by vemilov on 2.12.2015 г..
 */
var routerApp = angular.module('routerApp', ['ngRoute','ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {


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
                'columnOne@about': {
                    templateUrl: '../views/table-data2.html',
                    controller: 'scotchController'
                },
                'columnTwo@about': {
                    templateUrl: '../views/table-data.html',
                    controller: 'laptopController'
                }
            }
        })

        //INFO ABOUT LAPTOPS
        .state('laptops', {
            url: '#/laptops/:laptopId}',
            templateUrl: '../views/phone-detail.html',
            controller: 'laptopInfoController'
        });
});

routerApp.controller('scotchController', function ($scope) {
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

routerApp.controller('laptopController', function ($scope, $http) {
    $http.get('../laptops.json').success(function (data) {
        $scope.laptops = data;
    });
});

routerApp.controller('laptopInfoController', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
    $http.get('../laptops/'+ $routeParams.laptopId + '.json').success(function (data) {
        $scope.laptop = data;
    });
}]);
