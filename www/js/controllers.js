 angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Login) {
  $scope.email = '';
  $scope.senha = '';

  $scope.fazerLogin = function(email, senha) {
Login.login(email, senha, function(erro) {
      alert(erro);
        if (erro) {
          alert(erro);
         }else {
           $state.go("tarefas");
         }
    });
  }

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
      alert(erro);
    });
  }
})

.controller('TarefasCtrl', function($scope, Tarefas) {
  $scope.tarefas = [ ];
  Tarefas.get(function(valores){
    $scope.tarefas = converterObjParaArray(valores)
    $scope.$apply();
  })
})

function converterObjParaArray (obj) {
  var array = [];
  for (var key in obj) {
    obj[key].id = key;
    array.push(obj[key]);
  }
  return array;
}
