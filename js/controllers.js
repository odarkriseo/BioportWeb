'use strict';

/* Controllers */

angular
  .module('BioportControllers', [])
  .controller('MainCtrl', ['$scope','userService', function($scope,userService) {
  
    $scope.slider = 
    [ 
      {
        id:0,
        carouselH1 : 'The Marketplace for your Biological Samples',
        carouselP : 'Share, Sell and Buy some biological collections',
        src : "../lib/img/photo1.jpg",
        srcAlt : "C'est une première image",
        active:"active"
      },
      {
        id:1,
        carouselH1 : 'Bioport, your management software',
        carouselP : 'Use it to bla bla',
        src:"../lib/img/photo2.jpg",
        srcAlt : "C'est une deuxieme image",
        active:""    
      },
      {
        id:2,
        carouselH1 : 'Every collection needs to be manage',
        carouselP : '546 300 Samples stored, add yours',
        src:"../lib/img/photo3.jpg",
        srcAlt : "C'est une troisième image",
        active:""   
      }
    ];
    $scope.user = userService;

    if($scope.user.isConnected()){
      $scope.isLogged = true;
    }else{
       $scope.isLogged = false;
    }
    $scope.dynamicCtrl = 'MessageCtrl';
    $scope.logOut = function(){
      $scope.user.signOut();
      $scope.isLogged = false;
    }

  }])
  .controller('AccountCtrl', ['$scope','$routeParams', function($scope,$routeParams) {
    
    $scope.info =false;
    //$scope.controller = [HomeCtrl,OrderCtrl,MessageCtrl,CollectionCtrl,SampleCtrl,GroupCtrl,LocationCtrl,SettingCtrl];
    $scope.menus = 
    [
      {
          active :"",
          url : "home",
          iconClass : "glyphicon glyphicon-home",
          title : "Home",
          template :"../templates/ngHome.html"
      },
      {
          active :"",
          url : "orders",
          iconClass : "glyphicon glyphicon-credit-card",
          title : "Orders",
          template :"../templates/ngOrders.html"
      },
      {
          active :"",
          url : "messages",
          iconClass : "ion-chatboxes",
          title : "Messages",
          template :"../templates/ngMessages.html"
      },
      {
          active :"",
          url : "collections",
          iconClass : "ion-social-dropbox",
          title : "Collections",
          template :"../templates/ngCollections.html"
      },
      {
          active :"",
          url : "samples",
          iconClass : "ion-erlenmeyer-flask",
          title : "Samples",
          template :"../templates/ngSamples.html"
      },
      {
          active :"",
          url : "groups",
          iconClass : "ion-person-stalker",
          title : "Groups",
          template :"../templates/ngGroups.html"
      },
      {
          active :"",
          url : "locations",
          iconClass : "ion-ionic",
          title : "Locations",
          template :"../templates/ngLocations.html"
      },
      {
          active :"",
          url : "settings",
          iconClass : "ion-gear-b",
          title : "Settings",
          template :"../templates/ngSettings.html"
      }
    ]

    for(var i=0;i< $scope.menus.length;i++){
      $scope.menus[i].active = '';
      if($scope.menus[i].url == $routeParams.menu){
        $scope.menus[i].active = 'active';
      }
    }

    $scope.infos = function(){
      $scope.info = !$scope.info;
    }
  }])
  .controller('SignUpCtrl', ['$scope', function($scope) {
    
  }])
  .controller('SubscribeCtrl', ['$scope', function($scope) {
    
  }])
  .controller('SearchCtrl', ['$scope', function($scope) {
    
  }])
  .controller('CollectionCtrl', ['$scope','$http', function($scope,$http) {
      $scope.blah = "cooollectionnn";
    $http.get('http://localhost:1337/collection/limit=10').success(function(data){

    }).error(function(e){

    });
  }])
  .controller('OrderCtrl', ['$scope', function($scope) {
    
  }])
  .controller('HomeCtrl', ['$scope', function($scope) {
    
  }])
  .controller('SampleCtrl', ['$scope', function($scope) {
      $scope.filters = ['name','collection'];
      $scope.filterSelected = 'collection';
      $scope.tri = function(fil){
        $scope.filterSelected = fil;
      }
      $scope.samples=
      [
        {
          name:'collocius Malificius',
          collection:'Champignon',
          image:'../lib/img/biotech.jpg'
        },
        {
          name:'gelicius Morqus',
          collection:'Champignon',
          image:'../lib/img/biotech.jpg'

        },
        {
          name:'trompette de la mort',
          collection:'Champignon',
          image:'../lib/img/biotech.jpg'

        },
        {
          name:'champignon de paris',
          collection:'Champignon',
          image:'../lib/img/biotech.jpg'

        },
        {
          name:'ebola',
          collection:'Virus',
          image:'../lib/img/biotech.jpg'

        },
        {
          name:'souche H1N1',
          collection:'Virus',
          image:'../lib/img/biotech.jpg'

        }
      ]

      $scope.sampleSelected = false;

      $scope.select = function(sample){
        $scope.sampleSelected = sample;
        for(var i=0;i< $scope.samples.length;i++){
          $scope.samples[i].active = '';
          if($scope.samples[i].name == sample.name){
            $scope.samples[i].active = 'active';
          }
        }
      }
  }])
  .controller('GroupCtrl', ['$scope', function($scope) {
    
  }])
  .controller('MessageCtrl', ['$scope', function($scope) {
    $scope.blah="meeessage";
  }])
  .controller('SettingCtrl', ['$scope', function($scope) {
    
  }])
  .controller('LocationCtrl', ['$scope', function($scope) {
    
  }])
  .controller('LoginCtrl',['$scope','$rootScope','$http','$location','$timeout','userService',function($scope,$rootScope,$http,$location,$timeout,userService){
    
    $scope.rememberMeLog = false;
    $scope.connect = function(){
       
       $http.get('http://localhost:1337/login/m='+ $scope.emailLog +'&p='+$scope.passLog).success(function(data) {
        
        console.log("loginCtrl : data from http://localhost:1337/login/m=:mail&p=:mdp : '"+data+"'");
          
              if($scope.emailLog == data.mail && $scope.passLog == data.password){
                $rootScope.user = userService;
                $rootScope.user.signIn(data);
                $scope.closeModal();
               
                
                
              }
              
        
        }).error(function(e){
          console.log(e);
        });
    };


  }]);

