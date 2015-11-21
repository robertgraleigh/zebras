(function(){

'use strict';

angular.module('zebraTestApp', [
  'ui.router',
	'ct.ui.router.extras',
  'backand'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, BackandProvider) {
    $urlRouterProvider
      .otherwise('/giving-tree');

    $locationProvider.html5Mode(true);
    BackandProvider.setAppName('zebratest');
    BackandProvider.setSignUpToken('074e7696-4df7-4f46-80f1-6ab827d04b11');
    BackandProvider.setAnonymousToken('2e994303-7159-47c0-b56e-a989f75414eg');
  });

}());
