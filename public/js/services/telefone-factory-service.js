angular.module("projetoTecnico").factory("telefoneFactoryService", function () {

    var _new = function (telefone) {  
        var novoTelefone        = {}
        novoTelefone.id         = telefone.id;
        novoTelefone.tipo       = telefone.tipo;
        novoTelefone.numero     = telefone.numero;        
        novoTelefone.descricao  = telefone.descricao;
        return novoTelefone;  	
    };

    return {
            new: _new
    };
});