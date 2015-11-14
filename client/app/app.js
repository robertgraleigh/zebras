'use strict';

angular.module('zebraTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'backand',
  'angular-stripe'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
