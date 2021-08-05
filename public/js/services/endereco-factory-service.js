angular.module("projetoTecnico").factory("enderecoFactoryService", function () {

    var _new = function (endereco) {  
        var novoEndereco        = {};
        novoEndereco.id         = endereco.id;
        novoEndereco.descricao  = endereco.descricao;
        novoEndereco.numero     = endereco.numero;
        novoEndereco.logradouro = endereco.logradouro;
        novoEndereco.complemento= endereco.complemento;
        novoEndereco.cep        = endereco.cep;
        novoEndereco.bairro     = endereco.bairro;
        novoEndereco.principal  = endereco.principal ? true : false;
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
        $scope.endereco={}; 
        $scope.endereco.id          = endereco.id;
        $scope.endereco.descricao   = endereco.descricao;
        $scope.endereco.numero      = endereco.numero;
        $scope.endereco.logradouro  = endereco.logradouro;
        $scope.endereco.complemento = endereco.complemento;
        $scope.endereco.cep         = endereco.cep;
        $scope.endereco.bairro      = endereco.bairro;
        $scope.endereco.principal   = endereco.principal;
        $scope.endereco.$$hashKey   = endereco.$$hashKey;      	
    };

    var _configurarEnderecoPrincipal = function ($scope,enderecoParaSalvar) {  
        if(!enderecoParaSalvar.principal){
            return true;
        }
        $scope.enderecos = $scope.enderecos.filter(function(endereco){
            if(endereco.$$hashKey != enderecoParaSalvar.$$hashKey){
                endereco.principal = false;
            }
            return _new(endereco);
        });           	
    };

    return {
            new: _new,
            excluirEndereco: _excluirEndereco,
            editarEndereco: _editarEndereco,
            configurarEnderecoPrincipal: _configurarEnderecoPrincipal
    };
});