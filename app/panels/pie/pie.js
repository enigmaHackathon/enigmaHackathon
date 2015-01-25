'use strict';
angular.module('enigmaApp')
    .controller('pieCtrl', ['$scope',function ($scope) {
        var enigmaSrv = $scope.getEnigmaSrv;
        console.log("Helo banajit");
        $scope.exampleData = [];
        var dashboardRows = enigmaSrv.getEntityCount('asup_type');
        dashboardRows.then(function(result) {
            $scope.exampleData = result;
        })
        $scope.xFunction = function() {
            return function(data){
                return data.key;
            };
        }
        $scope.yFunction = function() {
            return function(data){
                return data.y;
            };
        }
    }]);
