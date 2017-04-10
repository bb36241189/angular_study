/**
 * Created by shmily on 2017/2/7.
 */

angular.module('angularStudyApp').controller('LoadingBarController',['$scope','$http',function ($scope,$http) {
    var loading = function () {
        return $http.get('json/ngTable.json');
    };

    loading().success(function () {
        
    }).error(function () {
        
    });
}]);