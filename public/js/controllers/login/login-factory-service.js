angular.module("projetotecnico").factory("loginFactoryService", function ($http,config) {
    
        let _cadastrar = function (usuario) {   
                return $http.post(config.baseUrl + '/usuarios', usuario);  	
        };

        let _atribuirFocoException = function (campo,$scope){
                switch (campo) {
                        case "email":
                                $scope.$broadcast('validarEmail');;
                                break;
                        case "senha":
                                $scope.$broadcast('validarSenha');;
                                break;
                }
        }

        return {
                cadastrar: _cadastrar,
                atribuirFocoException: _atribuirFocoException
        };
});