/**
 * Created by shmily on 2017/3/15.
 */

app.directive('myPwdMatch', [function(){
     return {
         restrict: "A",
         require: 'ngModel',
         link: function(scope,element,attrs,ctrl){
             var tageCtrl = scope.$eval(attrs.myPwdMatch);
             tageCtrl.$parsers.push(function(viewValue){
                 ctrl.$setValidity('pwdmatch', viewValue == ctrl.$viewValue);
                 return viewValue;
             });
             ctrl.$parsers.push(function(viewValue){
                 if(viewValue == tageCtrl.$viewValue){
                     ctrl.$setValidity('pwdmatch', true);
                     return viewValue;
                 } else{
                     ctrl.$setValidity('pwdmatch', false);
                     return undefined;
                 }
             });
         }
     };
 }]);