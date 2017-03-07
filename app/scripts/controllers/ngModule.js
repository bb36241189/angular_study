/**
 * Created by shmily on 2017/1/9.
 */

angular.module('angularStudyApp')
  .directive('myPwdMatch', [function() {
        return {
            restrict: "A",
            require : 'ngModel',
            link: function (scope, element, attrs, ctrl) {      //�ٴ�����
                // console.log(ctrl);

                var tageCtrl = scope.$eval(attrs.myPwdMatch);    //���������  ==ctrl  myForm.password  ����
                // console.log(tageCtrl);


                tageCtrl.$parsers.push(function (viewValue) {
                    // console.log(viewValue);                     //���������
                    // console.log(ctrl.$viewValue);
                    // console.log(tageCtrl);
                    ctrl.$setValidity('pwdmatch', viewValue == ctrl.$viewValue);  //���úϷ���
                    return viewValue;
                });

                ctrl.$parsers.push(function (viewValue) {
                    // console.log(tageCtrl.$viewValue);
                    // console.log(viewValue);             //�����ٴ������ʱ��
                    if (viewValue == tageCtrl.$viewValue) {
                        ctrl.$setValidity('pwdmatch', true);  //��������
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