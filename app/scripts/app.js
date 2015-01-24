'use strict';

/**
 * @ngdoc overview
 * @name enigmaApp
 * @description
 * # enigmaApp
 *
 * Main module of the application.
 */
angular
  .module('enigmaApp', [
     'ngRoute' ,
     'nvd3ChartDirectives'
    /*'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'*/
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
