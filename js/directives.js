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
  .directive("ngDynamicController",function($compile){
        return {
            terminal: true, 
            priority: 1000,
            link:function(scope,element,attr){
                var controllerProperty = scope[attr.ngDynamicController];
                element.attr('ng-controller', controllerProperty);
                element.removeAttr("ng-dynamic-controller"); 
                $compile(element)(scope);
            }
        }
    })
  .directive('ngHome', [function(){
    return {
      restrict: 'C',
      templateUrl:'../templates/ngHome.html',
      scope:{},
      transclude:true,
      controller: function(){

      },
      link: function(scope, element, attributes) {
        
      }
    };
  }])
  .directive('ngCollections', [function(){
    return {
      restrict: 'C',
      templateUrl:'../templates/ngCollections.html',
      link: function(scope, element, attributes) {
        
      }
    };
  }])
  .directive('ngGroups', [function(){
    return {
      restrict: 'C',
      templateUrl:'../templates/ngGroups.html',
      link: function(scope, element, attributes) {
        
      }
    };
  }])
  .directive('ngLocations', [function(){
    return {
      restrict: 'C',
      templateUrl:'../templates/ngLocations.html',
      link: function(scope, element, attributes) {
        
      }
    };
  }])
  .directive('ngMessages', [function(){
    return {
      restrict: 'C',
      templateUrl:'../templates/ngMessages.html',
      link: function(scope, element, attributes) {
        
      }
    };
  }])
  .directive('ngOrders', [function(){
    return {
      restrict: 'C',
      templateUrl:'../templates/ngOrders.html',
      link: function(scope, element, attributes) {
        
      }
    };
  }])
  .directive('ngSamples', [function(){
    return {
      restrict: 'C',
      templateUrl:'../templates/ngSamples.html',
      link: function(scope, element, attributes) {
        
      }
    };
  }])
  .directive('ngSettings', [function(){
    return {
      restrict: 'C',
      templateUrl:'../templates/ngSettings.html',
      link: function(scope, element, attributes) {
        
      }
    };
  }])
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
  