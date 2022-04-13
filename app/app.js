var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope) {

    $scope.ninjas = [
        {
            name: 'Yoshi',
            belt: 'green',
            rate: 50,
            available: true
        },
        {
            name: 'Crystal',
            belt: 'yellow',
            rate: 30,
            available: false
        },
        {
            name: 'Ryu',
            belt: 'orange',
            rate: 10,
            available: false
        },
        {
            name: 'Shaun',
            belt: 'black',
            rate: 1000,
            available: true
        }
    ];

}]);