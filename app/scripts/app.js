'use strict';

/**
 * @ngdoc overview
 * @name angularStudyApp
 * @description
 * # angularStudyApp
 *
 * Main module of the application.
 */
angular
  .module('angularStudyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngTable'
  ])
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
       $urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('main', {
          url : '/main',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
          .state('ngTable',{
            url : '/ngTable',
            templateUrl : 'views/ng-table.html',
            controller : 'TestNgTableController',
            controllerAs : 'TestNgTable'
          });
  }]);
