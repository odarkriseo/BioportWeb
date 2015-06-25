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
          template :"../templates/ngHome.html",
          infoHeader:'Every notifications is here !',
          infoContent:'You can access to the new event by clicking on each notification block.'

      },
      {
          active :"",
          url : "orders",
          iconClass : "glyphicon glyphicon-credit-card",
          title : "Orders",
          template :"../templates/ngOrders.html",
          infoHeader:'You bought or sold something ?',
          infoContent:'Right here, you can be aware on every tasks requiring your lenfkljn kkjezkj fe.'
      },
      {
          active :"",
          url : "messages",
          iconClass : "ion-chatboxes",
          title : "Messages",
          template :"../templates/ngMessages.html",
          infoHeader:'Manage your messages, easily.',
          infoContent:'Create, Answer, Delete messages simply.'
      },
      {
          active :"",
          url : "collections",
          iconClass : "ion-social-dropbox",
          title : "Collections",
          template :"../templates/ngCollections.html",
          infoHeader:'Create a collection ? It has never been as easy !',
          infoContent:'you can create a collection in 2 ways. By defining its model and by adding one by one each sample, or by importing a CSV file and give a name to the collection. That\'s all.'

      },
      {
          active :"",
          url : "samples",
          iconClass : "ion-erlenmeyer-flask",
          title : "Samples",
          template :"../templates/ngSamples.html",
          infoHeader:'How to use it ? Simple !',
          infoContent:'you can create a sample based on an existant collection. The collection\'s model is the only rule to respect, you can next choose to add files, visibility, price, etc. to your sample'

      },
      {
          active :"",
          url : "groups",
          iconClass : "ion-person-stalker",
          title : "Groups",
          template :"../templates/ngGroups.html",
          infoHeader:'Create user groups to share your collection restrictivly !',
          infoContent:'You can create group with user or even group themself. Then, you\'ll be able to select one of this groups to share your products with them only.'
      },
      {
          active :"",
          url : "locations",
          iconClass : "ion-ionic",
          title : "Locations",
          template :"../templates/ngLocations.html",
          infoHeader:'Manage your location samples.',
          infoContent:'Create, Drag\'n Drop , Assign some sample to it.'
      },
      {
          active :"",
          url : "settings",
          iconClass : "ion-gear-b",
          title : "Settings",
          template :"../templates/ngSettings.html",
          infoHeader:'Manage your settings.',
          infoContent:'Every other parameters will be here.'
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
    $scope.results=[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
  }])
  .controller('CollectionCtrl', ['$scope','$http', function($scope,$http) {
   /* $http.get('http://localhost:1337/collection/limit=10').success(function(data){

    }).error(function(e){

    });*/

    $scope.collections=
      [
        {
          name:'Champignon',
          sampleNumber:'4',
          image:'../lib/img/biotech.jpg',
          creationDate:'01-01-2014'
        },
        {
          name:'Virus',
          sampleNumber:'2',
          image:'../lib/img/biotech.jpg',
          creationDate:'01-01-2013'

        }
      ]
    $scope.globalInfo = { 
        type:'collection',
        filter:['name','creationDate','sampleNumber']
      }
  }])
  .controller('OrderCtrl', ['$scope', function($scope) {
    
  }])
  .controller('HomeCtrl', ['$scope', function($scope) {
    
  }])
  .controller('SampleCtrl', ['$scope', function($scope) {
  
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
      ];
      $scope.globalInfo = { 
        type:'sample',
        filter:['name','collection']
      }

  }])
  .controller('GroupCtrl', ['$scope', function($scope) {
    
  }])
  .controller('MessageCtrl', ['$scope', function($scope) {
      $scope.talk=
      [
        {
          type:'collectionMsg',
          idBind:'041104',
          object:'',
          messages:[
            {
              sender:'00145',
              creationDate:'01-05-2014 08:40',
              content:'Bonjour, je suis heureux de vous demander quelque chose parce que ça faisait longtemps que j\'attendais ça',
              attachment:[],
              reply:[
                  {
                    sender:'00214',
                    creationDate:'01-06-2014 09:45',
                    content:'Oui  et moi je suis très content de vous répondre !!! Wouhouuu voici une pièce jointe pour l\'occas',
                    attachments:['../lib/img/logo.png'],
                    reply:[]
                  }
              ]
            },
            {
              sender:'00114',
              creationDate:'09-10-2014 09:40',
              content:'Moi j\'ai une autre question !!! .... ? Voilà ! ',
              attachments:[],
              reply:[
                  {
                    sender:'00214',
                    creationDate:'01-06-2014 09:46',
                    content:'wohaah ça c\'est de la question ! tiens une PJ',
                    attachments:['../lib/img/logo.png'],
                    reply:[]
                  }
              ]
            }
          ]

        },
        {
          type:'privateMsg',
          idBind:'00214',
          object:'where do you work ?',
          messages:[
            {
              sender:'00145',
              creationDate:'01-01-2014 09:45',
              content:'Bonjour, je suis heureux de vous demander quelque chose parce que ça faisait longtemps que j\'attendais ça',
              attachment:[],
              reply:[]
            },
            {
              sender:'00214',
              creationDate:'01-01-2014 09:48',
              content:'Oui  et moi je suis très content de vous répondre !!! Wouhouuu',
              attachments:['../lib/img/logo.png'],
              reply:[]
            }
          ]

        }
      ];
      $scope.globalInfo = { 
        type:'message',
        filter:['type','date','object','send']
      }
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

