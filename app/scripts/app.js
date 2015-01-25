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
      .when('/solr', {
        templateUrl: 'views/solr.html',
        controller: 'solrCtrl'
      })
      .when('/elastic-search', {
        templateUrl: 'views/elastic-search.html',
        controller: 'elasticSearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
