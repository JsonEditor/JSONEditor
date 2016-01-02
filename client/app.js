'use strict';

angular.module('jsonEditor', [
  'ngRoute',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
