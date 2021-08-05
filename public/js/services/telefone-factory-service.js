angular.module("projetoTecnico").factory("telefoneFactoryService", function () {

    var _new = function (telefone) {  
        var novoTelefone        = {}
        novoTelefone.id         = telefone.id;
        novoTelefone.tipo       = telefone.tipo;
        novoTelefone.numero     = telefone.numero;        
        novoTelefone.descricao  = telefone.descricao;
        return novoTelefone;  	
    };

    var _excluirTelefone = function (telefones,telefoneExcluir) {  
        return telefones.filter(function(telefone){
            if(telefone.$$hashKey != telefoneExcluir.$$hashKey){
                return telefone;
            }
        });           	
    };

    var _editarTelefone = function ($scope,telefone) { 
        $scope.telefone={};   
        $scope.telefone.id          = telefone.id;
        $scope.telefone.descricao   = telefone.descricao;
        $scope.telefone.numero      = telefone.numero;
        $scope.telefone.tipo        = telefone.tipo;
        $scope.telefone.$$hashKey   = telefone.$$hashKey;       	
    };

    return {
            new: _new,
            excluirTelefone: _excluirTelefone,
            editarTelefone: _editarTelefone
    };
});