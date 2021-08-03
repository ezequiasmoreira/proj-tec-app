angular.module("projetoTecnico").factory("clienteFactoryService", function ($http,config) {
    
    var _cadastrar = function (cliente) {   
            return $http.post(config.baseUrl + '/clientes', cliente);  	
    };

    return {
            cadastrar: _cadastrar
    };
});