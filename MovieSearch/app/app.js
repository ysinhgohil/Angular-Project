var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {
    	templateUrl: "partials/home.html"
    })
    .when("/movies", {
        templateUrl: "partials/movies.html", 
        controller: "homeCtrl"
    })
    // else 404
    .otherwise({
    	redirectTo: "/"
    });
}]);