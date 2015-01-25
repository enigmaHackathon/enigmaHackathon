'use strict';

/**
 * @ngdoc service
 * @name enigmaApp.solrSrv
 * @description
 * # solrSrv
 * Service in the enigmaApp.
 */
angular.module('enigmaApp')
  .service('solrSrv', function ($http, $q) {
        var solrUrl = '/solr/apl-core/select?q=*%3A*&wt=json&indent=true';
        this.getRows = function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: solrUrl
            }).success(function(result){
                    deferred.resolve(result);
                }).error(function(){
                    deferred.reject('There was an error')
                })
            return deferred.promise;
        }
  });
