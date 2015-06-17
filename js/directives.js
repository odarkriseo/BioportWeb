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
  .directive('myModal', [ function(){
    return {
      restrict: 'C',
      link: function(scope, element, attributes) {
        scope.closeModal = function(){
          element.modal('hide');
        }
      }
    };
  }]).directive('ngResizable', [function(){
    return {
      restrict: 'C',
      link: function(scope, element, attributes) {
        element.resizable({
            minWidth: 200
        });
      }
    };
  }])
  .directive('ngSampleItem', function() {
  return {
    restrict: 'E',
    scope: {
      sampleSelected:"="
    },
    controller: function($scope) {
    },
    templateUrl: '../templates/ngSampleItem.html'
  };
})

/*  .directive('myTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane) {
        if (panes.length === 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    },
    templateUrl: '../templates/my-tabs.html'
  };
})
.directive('myPane', function() {
  return {
    require: '^myTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@',
      icon
    },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    templateUrl: '../templates/my-pane.html'
  };
});*/
  