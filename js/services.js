'use strict';

/* Services */

angular.module('BioportServices', ['ngCookies'])
  .service("userService",['$cookies','$cookieStore','$route','$rootScope','$http', function($cookies,$cookieStore,$route,$rootScope,$http) {
    $rootScope.logged = false;
        
    this.isConnected = function() {

          if($cookieStore.get('userConnected') != undefined){

              var idUser = $cookieStore.get('userConnected');
              var mail = idUser.split(";")[0];
              var pass = idUser.split(mail+";")[1];

              return $http.get('http://localhost:1337/login/m='+ mail+'&p='+ pass).success(function(data) {
               
                    $rootScope.logged = (mail == data.mail) && (pass == data.password);
      
                    return $rootScope.logged;
                
              })

          }else{
            return false;
          }
   
        };
    this.signIn = function(id) {
          if($cookieStore.get('userConnected') !== undefined){
            $cookieStore.remove('userConnected');
          }
            $cookieStore.put('userConnected',id.mail+';'+id.password);
        
            $rootScope.logged = true;
            $rootScope.$broadcast("connectionStateChanged");
            
        };
    this.signOut = function() {
            if($cookieStore.get('userConnected') !== 'undefined'){
            $cookieStore.remove('userConnected');
          }

             $rootScope.logged = false;
             $rootScope.$broadcast("connectionStateChanged");
        }
    
}]);
