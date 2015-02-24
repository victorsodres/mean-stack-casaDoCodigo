angular.module('contatooh')
.controller('ContatosController', function($scope, Contato) {
    $scope.total = 0;
    $scope.contatos = [];
    $scope.filtro = '';

    function buscaContatos(){
        Contato.query(
            function(data){
                $scope.contatos = data;
            },
            function(error){
                console.log('Não foi possível obter a lista de contatos.');
                console.log(error.statusText);
            }
        );
    }
    buscaContatos();
    
    $scope.remove = function(contato){
        Contato.delete({ id: contato._id },
              buscaContatos,
              function(erro){
                console.log('Não foi possivel remover contato.');
                console.log(erro);
            }
        );
    };
    
    $scope.mensagem = { texto: ''};
    
});
