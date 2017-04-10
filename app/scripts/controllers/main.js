'use strict';

/**
 * @ngdoc function
 * @name angularStudyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStudyApp
 */
angular.module('angularStudyApp')
  .controller('MainCtrl', ['$aside',function ($aside) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var asideInstance = $aside.open({
      templateUrl: 'views/ng-aside.html',
      controller: 'TestNgAsideController',
      placement: 'top',
      size: 'lg'
    });

  }]);
