angular.module('Test', ['ngRoute', 'ngAnimate']).config(function(){});

angular.module('Test').config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'TestController',
      name: 'index',
      animations: {
        pictures: ['to-bottom', 'from-top'],
        games: ['to-right', 'from-left']
      }
    })
    .when('/pictures', {
      templateUrl: 'pictures.html',
      controller: 'TestController',
      name: 'pictures',
      animations: {
        index: ['from-bottom', 'to-top'],
        games: ['to-right', 'from-left']
      }
    })
    .when('/games', {
      templateUrl: 'games.html',
      controller: 'TestController',
      name: 'games',
      animations: {
        index: ['to-left', 'from-right'],
        pictures: ['to-left', 'from-right']
      }
    });

    $locationProvider.html5Mode(true);

}).run(function($templateCache){

  $templateCache.put("index.html","<div class='index'>INDEX</div>");
  $templateCache.put("pictures.html","<div class='pictures'>PICTURES</div>");
  $templateCache.put("games.html","<div class='games'>GAMES</div>");

}).controller('TestController', function($scope){

});
