'use strict';

/* Directives */

angular.module('BioportDirectives', [])
  .directive('carousel', [function(){
    return {
      restrict: 'C',
      link: function(scope, element, attributes) {
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
    link: function(scope, element, attrs) {
      scope.list = scope.collections || scope.samples;
      scope.filters = scope.globalInfo.filter;
      scope.filterSelected = scope.globalInfo.filter[0];
      scope.tri = function(fil){
        scope.filterSelected = fil;
      }

      scope.itemSelected = null;
      initItemNull();
      scope.select = function(item){
        scope.itemSelected = item;
            if(item !== null){
               scope.itemFormHeaderTitle = scope.itemSelected.name;
              if(scope.globalInfo.type == 'sample'){      
                scope.itemFormHeaderContent = scope.itemSelected.collection;
              } else if(scope.globalInfo.type == 'collection'){
                scope.itemFormHeaderContent = scope.itemSelected.sampleNumber + ' Samples';
              }
            }
            if(item == null){
              initItemNull();
            }
        for(var i=0;i< scope.list.length;i++){
          scope.list[i].active = '';
          if(scope.list[i] == item){
             scope.list[i].active = 'active';
          }
        }
      }

      function initItemNull(){
        if(scope.globalInfo.type == 'sample'){
          scope.itemFormHeaderTitle ="Add a sample to your collection";
          scope.itemFormHeaderContent = "You'll be able to create samples by filling the form or by importing .CSV file";
          scope.imageDefault = '../lib/img/biotech.jpg';
        } else if(scope.globalInfo.type == 'collection'){
          scope.itemFormHeaderTitle ="Create a collection";
          scope.itemFormHeaderContent = "0 Sample - You can import a CSV file to generate model and samples";
          scope.imageDefault = '../lib/img/biotech.jpg';
        }
      }
    },
    templateUrl: '../templates/ngListItem.html'
  };
})
.directive('ngItem', function() {
  return {
    restrict: 'E',
    templateUrl: '../templates/ngItem.html'
  };
})
.directive('ngClear', function() {
  return {
    restrict: 'E',
    template: '<hr style="clear:both;visibility:hidden;margin:0 !important;" />'
  };
})
  .directive('ngVisibilityDropDownBtn', function() {
  return {
    restrict: 'E',
    scope:{
      entity : '=',
      type:'@'
    },
    link: function(scope, element, attrs) {
      scope.visibilities = {DEFAULT:"ion-eye",PUBLIC:"ion-earth",SHARED:"ion-person-stalker",PRIVATE:"ion-locked",INHERIT:"ion-merge"};
      scope.iconVisibility = scope.visibilities.DEFAULT;
      scope.visib = 'DEFAULT';
      scope.estHeritable = false;
      scope.users = [
      {
        id:"0001",name:"Hôpital Chantepie",type:'user'
      },{
        id:"0002",name:"Hôpital Grand frais",type:'user'
      },{
        id:"0003",name:"Marcel Jean",type:'user'
      },{
        id:"0004",name:"Groupe Clinique Brest",type:'group'
      },{
        id:"0005",name:"Groupe Valencienne",type:'group'
      }];
      scope.changeVisibility = function(visibility){
        scope.iconVisibility = scope.visibilities[visibility];
        scope.visib = visibility;
        element.find('.itemSelectedHeaderVisibility').removeClass('open');
        if(scope.type == 'attributeCollection'){
            scope.$parent.$parent.$parent.attribs[scope.entity].visibilities.visibility = visibility;
            if(visibility == "SHARED"){
              scope.$parent.$parent.$parent.attribs[scope.entity].visibilities.users = ["user1","user2","user3","groupUser1","groupUser2"];
            }else{
              scope.$parent.$parent.$parent.attribs[scope.entity].visibilities.users = null;
            }
            
        }
        if(scope.type == 'collection'){

        }
        if(scope.type == 'sample'){
          scope.estHeritable = true;
        }
        if(scope.type == 'attributeSample'){
          scope.estHeritable = true;
        }
      }
    },
    templateUrl: '../templates/ngVisibilityDropDownBtn.html'
  };
})
/*  .directive('ngForm', function() {
  return {
    restrict: 'E',
    templateUrl: '../templates/ngForm-'+ scope.type +'.html'
  };
})*/
 /*   .directive('ngAttributModel', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.removeAttribut = function(attrib){
        console.log('remove//////////////////////////////////////////////////////////////////////////////////////');
        delete(scope.attribs.attrib);
        
      }
      $scope.addAttribut = function(){
        console.log('add/////////////////////////////////////////////////////////////////////////////////////////');
      }
    },
    link: function(scope, element, attrs) {
      scope.attribs = [{key:"",value:""}];
      //alert('modellllll');
      scope.removeAttribut = function(attrib){
        console.log('remove//////////////////////////////////////////////////////////////////////////////////////');
        delete(scope.attribs.attrib);
        
      }
      scope.addAttribut = function(){
        console.log('add/////////////////////////////////////////////////////////////////////////////////////////');
      }
      
    }
  };
})*/

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
  