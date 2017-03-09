'use strict';

/**
 * @ngdoc function
 * @name angularStudyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStudyApp
 */
var app = angular.module('angularStudyApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
