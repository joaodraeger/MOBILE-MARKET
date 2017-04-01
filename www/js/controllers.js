 angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Login, $cordovaGeolocation, $ionicPlatform) {
  $scope.email = '';
  $scope.senha = '';

  $ionicPlatform.ready(function(){
    $cordovaGeolocation.getCurrentPosition().then(function (position) {
          var latLng  = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

           var geocoder = new google.maps.Geocoder;

           geocoder.geocode({'location': latLng}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              console.log(results);
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });
            
      }, function(err) {
          console.log(err);
      });
  })  

  $scope.fazerLogin = function(email, senha) {
Login.login(email, senha, function(erro) {
     
    if (erro) {
    
      }else {
        $state.go("inicio");
      }
    });
  }
  

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
     
    });
  }
 $scope.abrirCadastro = function(){
   $state.go("registro");
 }


})

.controller('InicioCtrl', function($scope, Tarefas) {
  $scope.produtos = [
    'Roupas',
    'Eletronicos',
    'Livros',
   
  ]
})
.controller('MarcasCtrl', function($scope, $stateParams, Produto) {
 $scope.produto = $stateParams.marca

 var produtosRoupas = [
    {
      nome: 'Hollister',
      foto: 'http://images.tcdn.com.br/img/img_prod/422345/chinelo_hollister_degrade_preto_e_vermelho_918_4_20160329095809.jpg',
      link: 'https://www.hollisterco.com'
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
    },
     {
      nome: 'Oakley',
      foto: 'https://i.ytimg.com/vi/cwswTuDFbj4/hqdefault.jpg',
      link: 'http://www.oakley.com.br'
    }
    
 ];

 var produtosEletronicos = [
   {
      nome: 'Best Buy',
      foto: 'https://pbs.twimg.com/profile_images/814925712792555520/EydPXyS9.jpg',
      link: 'http://www.bestbuy.com'
    },
     {
      nome: 'Aplle',
      foto: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703181902',
      link: 'http://www.apple.com/br/iphone/'
    },  
     {
      nome: 'Samsung',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrGdrs0VaYaLGiCHzRAo9cC7TDI5_ZAzcUX_7oEOXAWxR-zPC',
      link: 'http://www.samsung.com/us/explore/galaxy-s7-features-and-specs/'
    }

 ];

 var produtosLivros = [
   {
      nome: 'Amazon',
      foto: 'http://www.turnerduckworth.com/media/filer_public/b4/ac/b4ac5dfe-b335-403c-83b2-ec69e01f94e6/td-amazon-hero.svg',
      link: 'https://www.amazon.com.br/ebooks-kindle/b/ref=nav__kb_store?ie=UTF8&node=5475882011'
    }  

 ];
var  produtosAcessorios = [
   {
      nome: 'Amazon',
      foto: 'http://www.turnerduckworth.com/media/filer_public/b4/ac/b4ac5dfe-b335-403c-83b2-ec69e01f94e6/td-amazon-hero.svg',
      link: 'https://www.amazon.com.br/ebooks-kindle/b/ref=nav__kb_store?ie=UTF8&node=5475882011'
    }  
]

 if ($scope.produto === 'Roupas') {
  $scope.marcas = produtosRoupas;
 } else if ($scope.produto === 'Eletronicos') {
  $scope.marcas = produtosEletronicos;
 } else if ($scope.produto === 'Livros') {
  $scope.marcas = produtosLivros;
  } else if ($scope.produto === 'Acessorios') {
  $scope.marcas = produtosAcessorios;
 }
 
$scope.marcas = []

 Produto.get(function(produtos){
  $scope.marcas = converterObjParaArray(produtos)
  console.log($scope.marcas)
 })

 
 



 $scope.openLink = function (link) {
  window.open(link, '_target');
 }

})

.controller('TelacadastroCtrl', function($scope, Produto) {
  $scope.marca = '';
  $scope.categoria = '';
  $scope.imagem = '';
  $scope.url = '';
  $scope.cadastrar = function(marca, categoria, imagem, url){
    Produto.salvar(marca, categoria, imagem, url, function(error){
      if(error){
        alert(error)
      }
    })
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

function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}