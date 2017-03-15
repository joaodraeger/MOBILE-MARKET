angular.module('starter.services', [])

.factory("Context", function() {
var config = {
    apiKey: "AIzaSyDjQgRtvJNZkvhBSCveyXbmdv5n7EFY6Jg",
    authDomain: "html-mil-grau.firebaseapp.com",
    databaseURL: "https://html-mil-grau.firebaseio.com",
    storageBucket: "html-mil-grau.appspot.com",
    messagingSenderId: "906905468037"
  };

firebase.initializeApp(config);

return {
  get: function() {
    return firebase;
  }
}
})

.factory("Login", function(Context)  {

 return {
    login: function(email, senha, callback) {
      firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function() {
      callback();  
      })
      .catch(function(error) {
      callback(error);
      });
    },
    novo: function(email, senha, callback) {
      firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(function() {
        callback();
    })
    .catch(function(error) {
      callback(error)
    });

    }
  };
})
 
 .factory("Tarefas", function(Context){
   return{
     get: function(callback){
       firebase.database().ref('tarefas').on('value', function(snapshot) {
         callback(snapshot.val());

       })
       

     }
   }
 }) 
 