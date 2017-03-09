/**
 * Created by shmily on 2017/3/7.
 */


angular.module('angularStudyApp').controller('TestHttpController',['$http',function ($http) {
    $http.put('bb.json',{},{
        headers : {
            bb:'bb'
        }
    }).success(function () {

    });
}]);