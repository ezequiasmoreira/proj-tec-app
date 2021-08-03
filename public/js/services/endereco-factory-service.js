angular.module("projetoTecnico").factory("enderecoFactoryService", function () {

    var _new = function (endereco) {  
        var novoEndereco = {}
        novoEndereco.id         = endereco.id;
        novoEndereco.descricao  = endereco.descricao;
        novoEndereco.numero     = endereco.numero;
        novoEndereco.logradouro = endereco.logradouro;
        novoEndereco.complemento= endereco.complemento;
        novoEndereco.cep        = endereco.cep;
        novoEndereco.principal  = endereco.principal ? true : false;;
        return novoEndereco;  	
    };

    var _excluirEndereco = function (enderecos,enderecoExcluir) {  
        return enderecos.filter(function(endereco){
            if(endereco.$$hashKey != enderecoExcluir.$$hashKey){
                return endereco;
            }
        });           	
    };

    var _editarEndereco = function ($scope,endereco) {  
        $scope.endereco.id          = endereco.id;
        $scope.endereco.descricao   = endereco.descricao;
        $scope.endereco.numero      = endereco.numero;
        $scope.endereco.logradouro  = endereco.logradouro;
        $scope.endereco.complemento = endereco.complemento;
        $scope.endereco.cep         = endereco.cep;
        $scope.endereco.principal   = endereco.principal;
        $scope.endereco.$$hashKey   = endereco.$$hashKey;      	
    };

    return {
            new: _new,
            excluirEndereco: _excluirEndereco,
            editarEndereco: _editarEndereco
    };
});