'use strict';

angular.module('zebraTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forms', {
        url: '/forms',
        templateUrl: 'app/forms/forms.html',
        controller: 'FormsCtrl'
      });
  });