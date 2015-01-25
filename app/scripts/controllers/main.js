'use strict';

/**
 * @ngdoc function
 * @name enigmaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enigmaApp
 */
angular.module('enigmaApp')
    //.controller('MainCtrl', ['$scope', 'solrSrv',function ($scope, enigmaSrv) {
    .controller('MainCtrl', ['$scope', 'elasticSearchSrv',function ($scope, enigmaSrv) {
    $scope.getEnigmaSrv = enigmaSrv;
    $scope.dashboard = {
        rows:[
            {row_info:'',panels:[{'id':'p1', type:'line'},{'id':'p2', type:'bar'}]},
            {row_info:'',panels:[{'id':'p3', type:'stackedAreaChart'},{'id':'p4', type:'pie'}]}
        ]
    };
  }]);
