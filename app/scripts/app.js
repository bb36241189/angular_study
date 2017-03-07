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
    'ngTable',
    'ui.bootstrap',
    'ngAside',
    'ncy-angular-breadcrumb',
    'angular-loading-bar'
  ]).config(['$breadcrumbProvider','cfpLoadingBarProvider',function ($breadcrumbProvider,cfpLoadingBarProvider) {
      $breadcrumbProvider.setOptions({
        prefixStateName : 'main',
        template : 'bootstrap2'
      });
      cfpLoadingBarProvider.includeBar = false;
    }]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
       $urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('main', {
          url : '/main',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main',
            ncyBreadcrumb : {
              label : 'home'
            }
        })
          .state('ngTable',{
            url : '/ngTable',
            templateUrl : 'views/ng-table.html',
            controller : 'TestNgTableController',
            controllerAs : 'TestNgTable',
            ncyBreadcrumb : {
              label : 'ngTable',
              parent : 'main'
            }
          }).state('ngAside',{
            url : '/ngAside',
            templateUrl : 'views/ng-aside.html',
            controller : 'TestNgAsideController',
            controllerAs : 'TestNgAside',
            ncyBreadcrumb : {
              label : 'ngAside'
            }
          }).state('echarts',{
            url : '/echars',
            templateUrl : 'views/echars.html',
            controller : 'TestEcharsController',
            controllerAs : 'TestEchars',
            ncyBreadcrumb : {
              skip : true
            }
          }).state('ngModule',{
            url : '/ngModule',
            templateUrl : 'views/ngModule.html',
            controller : 'TestFormValide'
          }).state('loadingBar',{
            url : '/loadingBar',
            templateUrl : 'views/loadingBar.html',
            controller : 'LoadingBarController'
          });
  }]);
