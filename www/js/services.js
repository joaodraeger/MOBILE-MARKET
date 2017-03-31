angular.module('starter.services', [])

.factory("Context", function() {
var config = {
    
    apiKey: "AIzaSyCrcJdSq9LGuZ_DARzvCQepvqHNg6yWWpg",
    authDomain: "mobile-market-2d7db.firebaseapp.com",
    databaseURL: "https://mobile-market-2d7db.firebaseio.com",
    storageBucket: "mobile-market-2d7db.appspot.com",
    messagingSenderId: "498465187935"
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

  .factory("Produto", function(Context){
   return{
    salvar: function(marca, categoria, imagem, url){
      var produtoRef = firebase.database().ref('produto').push()
      produtoRef.set({
        
      });
    }
   }
 }) 
 