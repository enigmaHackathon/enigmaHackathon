'use strict';

/**
 * @ngdoc function
 * @name enigmaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enigmaApp
 */
angular.module('enigmaApp')
  .controller('elasticSearchCtrl', function ($scope, $http) {
    $scope.exampleData = [
      { key: "One", y: 5 },
      { key: "Two", y: 2 },
      { key: "Three", y: 9 },
      { key: "Four", y: 7 },
      { key: "Five", y: 4 },
      { key: "Six", y: 3 },
      { key: "Seven", y: 9 }
    ];
    $scope.exampleData = [];
    $scope.xFunction = function(){
      return function(d) {
        return d.key;
      };
    }
    $scope.yFunction = function(){
      return function(d) {
        return d.y;
      };
    }
    // ==================================
    var translateData = function(input){
      var data = [];
      for(var i=0;i<input.aggregations.popular_colors.buckets.length;i++){
        data.push({
          key:input.aggregations.popular_colors.buckets[i].key,
          y:input.aggregations.popular_colors.buckets[i].doc_count
        });
      }
      return data;
    }
    $scope.getData = function(){
      var query_criteria = {
          "aggs" : {
              "popular_colors" : {
                  "terms" : {
                      "field" : "color"
                  }
              }
          }
      };

      $http({
          method: 'POST',
          url: 'http://localhost:9200/cars/transactions/_search?search_type=count',
          data:query_criteria
      }).success(function (response) {
          $scope.exampleData = translateData(response);
          console.log('response', response);
      }).error(function(){
          $scope.exampleData = [];
          console.log('error', response);
      });
    }
    $scope.getData();
    // ==================================
  });
