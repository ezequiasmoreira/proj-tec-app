angular.module('projetoTecnico').controller('loginController', function($scope,loginFactoryService,loginFactorySpec,utilFactorySpec){
    
    $scope.login = {};
	$scope.mensagem = '';

    $scope.login = function() {            
        loginFactoryService.login($scope.login);		
    };

    $scope.cadastrarUsuario = function() {             
        try {
            let usuario =  $scope.usuario;

            if (!loginFactorySpec.validarFormulario($scope.formulario)) return;    
            loginFactorySpec.validarSenha($scope)
            utilFactorySpec.validarEmail(usuario.email,$scope);

            loginFactoryService.cadastrar(usuario).then(successCallback, errorCallback);

            function successCallback(response){    
                window.location.href = '../../index.html'; 
            }

            function errorCallback(response){ 
                let  mensagem = "Erro ao cadastrar o usuário"
                if (response.data ){  
                    loginFactoryService.atribuirFocoException(response.data.cause,$scope); 
                    mensagem = response.data.message;
                }           
                $scope.mensagem = mensagem;
                return;
            }         

        }catch (exception) {
            $scope.mensagem = exception
            return;
        }           
    };
});