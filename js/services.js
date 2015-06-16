'use strict';

/* Services */

angular.module('BioportServices', ['ngCookies'])
  .service("userService",['$cookies','$cookieStore','$rootScope','$http', function($cookies,$cookieStore,$rootScope,$http) {
    $rootScope.logged = false;
        
    this.isConnected = function() {

          if($cookieStore.get('userConnected') != undefined){

              var idUser = $cookieStore.get('userConnected');
              
              
              console.log("idUser : '"+ idUser+"'");
              var mail = idUser.split(";")[0];
              var pass = idUser.split(mail+";")[1];
              console.log("mail : '"+ mail+"' pass : '"+pass+"'");
              return $http.get('http://localhost:1337/login/m='+ mail+'&p='+ pass).success(function(data) {
               
                    $rootScope.logged = (mail == data.mail) && (pass == data.password);
                    console.log("connecté : "+ $rootScope.logged);
                    return $rootScope.logged;
                
              })

          }else{
            return false;
          }
            //return $cookies.get('userConnected');
        };
    this.signIn = function(id) {
          if($cookieStore.get('userConnected') !== undefined){
            $cookieStore.remove('userConnected');
          }
            $cookieStore.put('userConnected',id.mail+';'+id.password);
            
        
            $rootScope.logged = true;
            console.log($rootScope);
            $rootScope.$broadcast("connectionStateChanged");
        };
    this.signOut = function() {
            if($cookieStore.get('userConnected') !== 'undefined'){
            $cookieStore.remove('userConnected');
          }

             $rootScope.logged = false;
             console.log($rootScope);
             $rootScope.$broadcast("connectionStateChanged");
        }
    
}]);
