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
      when('/account/:menu', {
        templateUrl: 'partials/account.html',
        controller: 'AccountCtrl',
        authorized: true
      }).
      when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignUpCtrl'
      }).
      when('/subscribe', {
        templateUrl: 'partials/subscribe.html',
        controller: 'SubscribeCtrl'
      }).
      when('/search/q=:query', {
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
      
        if (next.$$route.authorized  && !userService.isConnected()) {

            $location.url("/connexion?returnUrl=" + $location.path());
        }
    });
});;