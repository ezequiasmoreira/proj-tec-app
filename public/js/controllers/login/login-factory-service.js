angular.module("projetoTecnico").factory("loginFactoryService", function ($http,config) {
    
        let _login = function (login) { 
                let urlLogin = "/oauth/token?grant_type=password&username="+login.email+"&password="+login.senha
               console.log($http.post(config.baseUrl + urlLogin))         
        };

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
                login: _login,
                cadastrar: _cadastrar,
                atribuirFocoException: _atribuirFocoException
        };
});