// MODULE
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);



// CONFIG
myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller : 'NinjaController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller : 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller : 'ContactController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller : 'NinjaController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);



// CUSTOM DIRECTIVE
myNinjaApp.directive('randomNinja', [function() {
    return {
        restrict: 'E',     // as an "element"
        scope   : {
            ninjas: '=',   // set "equal" to passed "ninjas" property in the element
            title : '='    // set "equal" to passed "title"  property in the element
        },
        templateUrl: 'views/random.html',
        transclude : true, // enables nesting of child elements
        replace    : true, // makes the outer-most element as the template tag
        controller : function($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
}]);



// CONTROLLER :: NinjaController
myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http) {

    // METHOD :: REMOVE NINJA
    $scope.removeNinja = function(ninja) {
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    };

    // METHOD :: REMOVE ALL NINJAS
    $scope.removeAll = function() {
        $scope.ninjas = [];
    };

    // METHOD :: ADD NINJA
    $scope.addNinja = function() {
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            belt: $scope.newNinja.belt,
            rate: parseInt($scope.newNinja.rate),
            available: true
        });

        $scope.newNinja.name = '';
        $scope.newNinja.belt = '';
        $scope.newNinja.rate = '';
    }

    // FETCH ALL NINJAS
    $http.get('data/ninjas.json').then(function(response) {
        $scope.ninjas = response.data;
    }, function(errors) {
        console.log('ERROR: ', errors);
    });

}]);


// CONTROLLER :: ContactController
myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location) {
    $scope.sendMessage = function() {
        $location.path('contact-success');
    };
}]);