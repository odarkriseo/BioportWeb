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
    
    $scope.logOut = function(){
      $scope.user.signOut();
      $scope.isLogged = false;
    }

  }])
  .controller('HomeCtrl', ['$scope', function($scope) {

  }])
  .controller('AccountCtrl', ['$scope', function($scope) {
    
  }])
  .controller('SearchCtrl', ['$scope', function($scope) {
    
  }])
  .controller('CollectionCtrl', ['$scope', function($scope) {
    
  }])
  .controller('SampleCtrl', ['$scope', function($scope) {
    
  }])
  .controller('AccountCtrl', ['$scope', function($scope) {
    
  }])
  .controller('LoginCtrl',['$scope','$rootScope','$http','$location','userService',function($scope,$rootScope,$http,$location,userService){
    
    $scope.rememberMeLog = false;
    $scope.connect = function(){
       
       $http.get('http://localhost:1337/login/m='+ $scope.emailLog +'&p='+$scope.passLog).success(function(data) {
        
        console.log("loginCtrl : data from http://localhost:1337/login/m=:mail&p=:mdp : '"+data+"'");
          
              if($scope.emailLog == data.mail && $scope.passLog == data.password){
                $rootScope.user = userService;
                $rootScope.user.signIn(data);
                $scope.closeModal();
                //$location.url('/home');
              }
               
        
        }).error(function(e){
          console.log(e);
        });
    };


  }]);

