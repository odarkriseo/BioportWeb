'use strict';

/* Services */

angular.module('BioportServices', ['ngCookies'])
  .service("userService",['$cookies','$cookieStore','$rootScope','$http', function($cookies,$cookieStore,$rootScope,$http) {
    $rootScope.logged = false;
    return {

        isConnected: function() {
    
          
          if($cookieStore.get('userConnected') == 'undefined'){

              var idUser = $cookieStore.get('userConnected');
              
              
              console.log("idUser : '"+ idUser+"'");
              var mail = idUser.split(";")[0];
              var pass = idUser.split(mail+";")[1];
              console.log("mail : '"+ mail+"' pass : '"+pass+"'");
              $http.get('http://localhost:1337/login/m='+ mail+'&p='+ pass).success(function(data) {
                console.log(idUser.mail +" "+ data.mail +" "+idUser.password +" "+ data.password);
                  
                    return (idUser.mail == data.mail) && (idUser.password == data.password);
                
              }).error(function(e){
                  console.log(e);
              })

          }else{
            return false;
          }
            //return $cookies.get('userConnected');
        },
        signIn: function(id) {
          if($cookieStore.get('userConnected') !== 'undefined'){
            $cookieStore.remove('userConnected');
          }
            $cookieStore.put('userConnected',id.mail+';'+id.password);
            $rootScope.$broadcast("connectionStateChanged");
            $rootScope.logged = true;
            console.log($rootScope);
        },
        signOut: function() {
            if($cookieStore.get('userConnected') !== 'undefined'){
            $cookieStore.remove('userConnected');
          }
            $rootScope.$broadcast("connectionStateChanged");
             $rootScope.logged = false;
             console.log($rootScope);
        }
    };
}]);
