'use strict';

angular.module('zebraTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'backand',
  'angular-stripe'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, BackandProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    BackandProvider.setAppName('zebratest');
    BackandProvider.setSignUpToken('074e7696-4df7-4f46-80f1-6ab827d04b11');
    BackandProvider.setAnonymousToken('2e994303-7159-47c0-b56e-a989f75414eg');
  });
