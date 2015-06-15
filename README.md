#BioportWeb
#aller à la racine du projet en cmd
#faire un npm install et préciser la version du virtual studio --msvs_version=2013 si nécessaire
#import userJson.json file to your mongoDB with :
#mongoimport --db bioportDB --collection users --jsonArray --file ./path/to/your/file.json
#run web-server.js for client server
#then turn on your mongoDB
#turn on serverFini.js for DB access
#go to localhost:8020/index.html to homepage
#go to localhost:1337/someUrl declared in serverFini.js to test DB access
