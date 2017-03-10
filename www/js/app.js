
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
 
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
    url: '/login',
    views:{
    'view-inicial':{
    templateUrl: 'templates/login.html',
    controler: 'dasshCtrl'
  }
    }
  })

    .state('cadastro', {
    url: '/cadastro',
    views:{
    'view-inicial': {
    templateUrl: 'templates/cadastro.html',
    controler: 'dasshCtrl'
  }
    }
  })


  $urlRouterProvider.otherwise('/login');

});
