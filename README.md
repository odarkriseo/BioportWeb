#BioportWeb
#aller à la racine du projet en cmd
#faire un npm install et préciser (si erreur au premier essai) la version du virtual studio --msvs_version=2013 
#importer les fichiers mock: userJson.json sur mongoDB avec :
#mongoimport --db bioportDB --collection users --jsonArray --file ./userJson.json
#ouvrer un cmd et faire :"mongod --dbpath C:\path\to\your\mongodb_data" pour allumer la BDD
#ouvrer un autre cmd et faire :"nodemon server.js" pour démarrer le serveur
#go to localhost:8020/index.html to homepage
#go to localhost:1337/someUrl declarées dans dataBase.js pour tester les accès aux requetes et réponses en bdd
