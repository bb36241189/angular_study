/**
 * Created by shmily on 2017/3/14.
 */

var url = 'http://www.cnblogs.com/darrenji/p/5185219.html';

var app_http = angular.module('app_http',[]);
app_http.controller('TestHttpCtrl',['$http',function ($http) {
    $http.get(url,{
        successAlert : true,
        errorAlert : true,
        title : '获取测试文档'
    });
}]);

app_http.run([function () {
    alert('跑起来了!');
}]);

app_http.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');
}]);

app_http.factory('HttpInterceptor',['$q','SAlert',function ($q,SAlert) {
    var interceptor = {
        request: function(config){
            var deferred = $q.defer();
            deferred.resolve(config);
            return deferred.promise;
        },
        response: function(response){
            var deferred = $q.defer();
            deferred.resolve(response);
            if(response.config && response.config.successAlert){
                SAlert.showMessage(response.config.title+'成功!');
            }
            return deferred.promise;
        },
        requestError: function(rejection){
            return $q.reject(rejection);
        },
        responseError: function(response){
            if(response.data && response.data.error && response.config.errorAlert){
                SAlert.alertError(response.data.error.message);
            }else{
                SAlert.alertError(response.config.title+'失败!');
            }
            return $q.reject(response);
        }
    };
    return interceptor;
}]).factory('SAlert',[function () {
    var alertError = function (msg) {
        alert(msg);
    };
    var showMessage = function (msg) {
        alert(msg);
    };
    return {
        alertError : alertError,
        showMessage : showMessage
    }
}]);