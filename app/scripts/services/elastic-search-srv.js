'use strict';

/**
 * @ngdoc service
 * @name enigmaApp.solrSrv
 * @description
 * # solrSrv
 * Service in the enigmaApp.
 */
angular.module('enigmaApp')
  .service('elasticSearchSrv', function ($http, $q) {
        this.getEntityCount = function(facetType) {
            var deferred = $q.defer();
            var facetResults = [];
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
            }).success(function(result){
                    deferred.resolve(translateData(result));
                }).error(function(){
                    deferred.reject('There was an error')
                })
            return deferred.promise;
        }
  });
