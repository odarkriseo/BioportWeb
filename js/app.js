'use strict';

/* App Module */

var app = angular.module('Bioport', [
  'ngRoute',
  'ngCookies',
  'BioportControllers',
  'BioportFilters',
  'BioportServices',
  'BioportDirectives'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/account', {
        templateUrl: 'partials/account.html',
        controller: 'AccountCtrl',
        authorized: true
      }).
      when('/offers', {
        templateUrl: 'partials/offers.html',
        controller: 'offersCtrl'
      }).
      when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
      }).
      when('/search/query=:query', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
      }).
      when('/search/:idCollection', {
        templateUrl: 'partials/collection.html',
        controller: 'CollectionCtrl'
      }).
      when('/search/:idCollection/:idSample', {
        templateUrl: 'partials/sample.html',
        controller: 'SampleCtrl'
      }).
      otherwise({
        redirectTo:'/'
      });
  }])
  .run(function($rootScope, $location, userService) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      console.log("listener de routes : user connecté : "+ userService.isConnected());
        if (next.$$route.authorized  && !userService.isConnected()) {

            $location.url("/connexion?returnUrl=" + $location.path());
        }
    });
});;