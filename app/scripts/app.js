'use strict';

/**
 * @ngdoc overview
 * @name angularStudyApp
 * @description
 * # angularStudyApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularStudyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngTable',
    'ui.select',
    'ngSanitize'
  ])
  .config(['$stateProvider','$urlRouterProvider','$controllerProvider','$compileProvider','$filterProvider','$provide',
      function ($stateProvider,$urlRouterProvider,$controllerProvider,$compileProvider,$filterProvider,$provide) {


        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;


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
          }).state('http',{
            url : '/http',
            template : '<div></div>',
            controller : 'TestHttpController'
          }).state('permissions',{
            url : '/permissions',
            template : '<div></div>',
            controller : 'PermissionsCollect'
          }).state('permenusTree',{
            url : '/permenusTree',
            template : '<div permenus-tree="treeData" selectMode="3" select="select"></div>',
            controller : 'TestPermenusTree'
          }).state('httpInterceptor',{
            url : '/httpInterceptor',
            template : '<div ng-app="app_http"><div ng-controller="TestHttpCtrl"></div></div>'
          }).state('testNgSelect',{
            url : '/testNgSelect',
            templateUrl : 'views/test-ng-select.html',
            controller : 'TestNgSelect',
            resolve : {
              load : ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('scripts/controllers/testNgSelect.js');
              }]
            }
          })
  }]);
