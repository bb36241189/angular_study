/**
 * Created by shmily on 2017/3/15.
 */

app.directive("createUnique", ["$q", "$http", "$cookies", "AppConfig", "commonService", function($q, $http, $cookies, AppConfig, commonService){
    return{
        restrict:"A",
        require:"ngModel",
        link:function(scope,ele,attrs,ctl){
            ctl.$asyncValidators.checkasync = function(modelValue,viewValue){
                var d = $q.defer();
                $http({
                    method:"GET",
                    url:commonService.getServerAuthUrl(attrs.createUnique),
                    headers:{
                        "Authorization": $cookies.get("token")
                    }
                }).success(function(data){
                    var flag = true;
                    for(var i=0;i< data.response.length;i++)
                    {
                        if(data.response[i][attrs.name] === modelValue){
                            flag = false;
                        }
                    }
                    if(flag){
                        d.resolve();
                    }
                    else{
                        d.reject();
                    }
                }).error(function(data){
                    //alert_error(data);
                    d.resolve();
                });
                return d.promise;
            };
        }
    };
}]);