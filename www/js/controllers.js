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
           $state.go("inicio");
         }
    });
  }

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
      alert(erro);
    });
  }
})

.controller('InicioCtrl', function($scope, Tarefas) {
  $scope.produtos = [
    'Roupas',
    'Eletronicos',
    'Livros',
      'Intrumentos Musicais'
  ]
})
.controller('MarcasCtrl', function($scope, $stateParams, Tarefas) {
 $scope.produto = $stateParams.marca
 
 var produtosRoupas = [
    {
      nome: 'Hollister',
      foto: 'http://images.tcdn.com.br/img/img_prod/422345/chinelo_hollister_degrade_preto_e_vermelho_918_4_20160329095809.jpg',
      link: 'https://www.hollisterco.com/shop/us'
    },
    {
      nome: 'Nike',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PiPYDjGwVO-Qwfd0PIhD8jVSu72TNItDzut2zrCGVdDkoyWzmg',
      link: 'http://www.nike.com.br/masculino/vestuario?nid=100020'
    },
    {
      nome: 'Adidas',
      foto: 'https://12pulgadasbcn.com/c/108-category_avena/adidas.jpg',
      link: 'http://www.adidas.com.br/roupas-homens'
    }
    
 ];

 var produtosEletronicos = [
   {
      nome: 'Best Buy',
      foto: 'https://pbs.twimg.com/profile_images/814925712792555520/EydPXyS9.jpg',
      link: 'http://www.bestbuy.com/'
    },
     {
      nome: 'Aplle',
      foto: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703181902',
      link: 'http://www.apple.com/br/iphone/'
    }  

 ];

 var produtosLivros = [
   {
      nome: 'Amazon',
      foto: 'http://www.turnerduckworth.com/media/filer_public/b4/ac/b4ac5dfe-b335-403c-83b2-ec69e01f94e6/td-amazon-hero.svg',
      link: 'https://www.amazon.com.br/ebooks-kindle/b/ref=nav__kb_store?ie=UTF8&node=5475882011'
    }  

 ];

 

 $scope.marcas = []
 
 if ($scope.produto === 'Roupas') {
  $scope.marcas = produtosRoupas;
 } else if ($scope.produto === 'Eletronicos') {
  $scope.marcas = produtosEletronicos;
 } else if ($scope.produto === 'Livros') {
  $scope.marcas = produtosLivros;
  } else if ($scope.produto === 'Acessorios') {
  $scope.marcas = produtosAcessorios;
 }


})

function converterObjParaArray (obj) {
  var array = [];
  for (var key in obj) {
    obj[key].id = key;
    array.push(obj[key]);
  }
  return array;
}
