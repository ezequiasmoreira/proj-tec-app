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

    return {
            new: _new
    };
});