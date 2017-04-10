/**
 * Created by lyh on 2016/12/22.
 */
"use strict";

angular.module('angularStudyApp')
  .controller('TestNgTableController', ['$scope','NgTableParams','$http','$log',function ($scope,NgTableParams,$http,$log) {
        var initVM = function ($scope) {
            $scope.vm = {
                images : new NgTableParams({},{getData : function (params) {
                    return $http.get('json/ngTable.json').then(function (ret) {
                        return ret.data;
                    },function (msg) {
                        $log.error(msg);
                    });
                }})
            };
        };

        var main = function () {
            initVM($scope);
        };

        main();
  }]);