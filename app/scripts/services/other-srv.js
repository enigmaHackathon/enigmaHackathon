'use strict';

angular.module('enigmaApp')
.service('otherSrv', function ($http, $q) {
      var url = '';// put url to data source
      this.getEntityCount = function() {
            var deferred = $q.defer();
            $http({
                  method: 'GET',
                  url: url
            }).success(function(data){
                  var processed_data = data;// Process your data source here
                  deferred.resolve(processed_data);
            }).error(function(){
                  deferred.reject('There was an error')
            });
            return deferred.promise;
      }
});
