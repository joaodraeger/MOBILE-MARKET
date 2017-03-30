 
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

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
    views: {
      'view-inicial': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }

  })
  .state('registro', {
    url: '/registro',
    views: {
      'view-inicial': {
        templateUrl: 'templates/registro.html', 
        controller: 'LoginCtrl'
      }
    }

  })
  .state('inicio', {
    url: '/inicio',
    views: {
      'view-inicial': {
        templateUrl: 'templates/inicio.html',
        controller: 'InicioCtrl'
     }
    }

  })
  .state('marcas', {
    url: '/marcas/:marca',
    views: {
      'view-inicial': {
        templateUrl: 'templates/marcas.html',
          controller: 'MarcasCtrl'
     }
    }

  })
  .state('chat', {
    url: '/chat',
    views: {
      'view-inicial': {
        templateUrl: 'templates/chat.html',
     }
    }

  })
    .state('config', {
    url: '/config',
    views: {
      'view-inicial': {
        templateUrl: 'templates/config.html',
     }
    }

  })
    .state('confirmar', {
    url: '/confirmar',
    views: {
      'view-inicial': {
        templateUrl: 'templates/confirmar.html',
     }
    }

  })



  $urlRouterProvider.otherwise('/login');

});
