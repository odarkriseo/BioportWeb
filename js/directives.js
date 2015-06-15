'use strict';

/* Directives */

angular.module('BioportDirectives', [])
  .directive('carousel', [function(){
    return {
      restrict: 'C',
      link: function(scope, element, attributes) {
        console.log(element);
        element.carousel({
            interval: 5000
        });
      }
    };
  }])
  .directive('dropdownToggle', [function(){
    return {
      restrict: 'C',
      link: function(scope, element, attributes) {
        console.log(element);
        element.dropdown();
      }
    };
  }])
  .directive('myModal', [function(){
    return {
      restrict: 'C',
      link: function(scope, element, attributes) {
        scope.closeModal = function(){
          element.modal('hide',function(){
            return;
          });
        }
      }
    };
  }]);
  