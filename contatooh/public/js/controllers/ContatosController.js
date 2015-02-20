angular.module('contatooh')
.controller('ContatosController', function($scope, $resource) {
    $scope.total = 0;
    $scope.contatos = [];
    $scope.filtro = '';
    
    $http.get('/contatos')
        .success(function(data){
            $scope.contatos = data;
        })
        .error(function(error){
            console.log('Não foi possível obter a lista de contatos.');
            console.log(error.statusText);
        })
    
});
