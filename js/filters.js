'use strict';

/* Filters */

angular.module('BioportFilters', [])

  .filter('strongAlcohol', function() {
    return function(alcohol) {
      return (alcohol < 8) ? alcohol+' \u2713' : alcohol+' \u2718';
    };

}).filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});
