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
  .directive('ngListItem', function() {
  return {
    restrict: 'E',
    scope: {
      list:"=",
      type:"="
    },
    controller: function($scope) {

      $scope.filters = $scope.type.filter;
      $scope.filterSelected = $scope.type.filter[0];
      $scope.tri = function(fil){
        $scope.filterSelected = fil;
      }

      $scope.itemSelected = false;
       $scope.select = function(item){
        $scope.itemSelected = item;
        for(var i=0;i< $scope.list.length;i++){
          $scope.list[i].active = '';
          if($scope.list[i] == item){
            $scope.list[i].active = 'active';
          }
        }
      }

    },
    templateUrl: '../templates/ngListItem.html'
  };
})
.directive('ngItem', function() {
  return {
    restrict: 'E',
    scope: {
      item:"=",
      type:"="

    },
    controller:function($scope){
      if($scope.type.type == 'sample'){
        $scope.itemFormHeaderTitle ="Add a sample to your collection";
        $scope.itemFormHeaderContent = "You'll be able to create samples by filling the form or by importing .CSV file";
      } else if($scope.type.type == 'collection'){
        $scope.itemFormHeaderTitle ="Create a collection";
        $scope.itemFormHeaderContent = "You can import a CSV file or you can create it from scratch";
      }
    
      console.log($scope.item);
    },
    templateUrl: '../templates/ngItem.html'
  };
})
  .directive('ngPin', function() {
  return {
    restrict: 'E',
    scope:{
      itemSelected: "=",
      type:"="
    },
    templateUrl: '../templates/ngPin.html'
  };
})
  .directive('ngVisibilityDropDownBtn', function() {
  return {
    restrict: 'E',
    scope:{
      item: "="
    },
    templateUrl: '../templates/ngVisibilityDropDownBtn.html'
  };
})
  .directive('ngForm', function() {
  return {
    restrict: 'E',
    scope:{
      type: "="
    },
    templateUrl: '../templates/ngForm-'+ scope.type +'.html'
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
  