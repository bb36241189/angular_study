/**
 * Created by shmily on 2017/1/9.
 */

angular.module('angularStudyApp')
  .directive('myPwdMatch', [function() {
        return {
            restrict: "A",
            require : 'ngModel',
            link: function (scope, element, attrs, ctrl) {      //再次输入
                // console.log(ctrl);

                var tageCtrl = scope.$eval(attrs.myPwdMatch);    //密码输入框  ==ctrl  myForm.password  属性
                // console.log(tageCtrl);


                tageCtrl.$parsers.push(function (viewValue) {
                    // console.log(viewValue);                     //密码输入框
                    // console.log(ctrl.$viewValue);
                    // console.log(tageCtrl);
                    ctrl.$setValidity('pwdmatch', viewValue == ctrl.$viewValue);  //设置合法性
                    return viewValue;
                });

                ctrl.$parsers.push(function (viewValue) {
                    // console.log(tageCtrl.$viewValue);
                    // console.log(viewValue);             //密码再次输入的时候
                    if (viewValue == tageCtrl.$viewValue) {
                        ctrl.$setValidity('pwdmatch', true);  //设置属性
                        return viewValue;
                    } else {
                        // console.log("1111");
                        ctrl.$setValidity('pwdmatch', false);
                        return viewValue;
                    }
                });
            }
        }
    }]).controller('TestFormValide',['$scope','$window', function ($scope,$window) {
        $scope.pwd = null;
        $scope.repwd = null;
        $window.bb = $scope;
    }]);