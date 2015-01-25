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
        this.getEntityCount = function(facetType) {
            var facet = '&facet.field=' + facetType + '&rows=0&facet=true';
            var deferred = $q.defer();
            var facetResults = [];
            $http({
                method: 'GET',
                url: solrUrl + facet
            }).success(function(result){
                    console.log(result.facet_counts.facet_fields[facetType]);
                    var tempRes = result.facet_counts.facet_fields[facetType];
                    for(var i=0;i <tempRes.length;i++)  {
                        facetResults.push({key:tempRes[i], y:tempRes[i+1]});
                        i++;
                    }
                    deferred.resolve(facetResults);
                }).error(function(){
                    deferred.reject('There was an error')
                })
            return deferred.promise;
        }
  });
