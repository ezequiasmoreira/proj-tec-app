angular.module('projetoTecnico').controller('logController', function($scope, logService, logDTO){ 
    
    vm = $scope;
    popularClasses();
    
    vm.log ={};
    vm.atualizarClasses = atualizarClasses;
    vm.obterLogs = obterLogs;
    vm.atualizarPropriedade = atualizarPropriedade;
    
    function obterLogs (log) {
        try{
            log.classe = log.classeSelect2.classe;
            log.campoName = log.propriedadeSelect2.nome;
            logService.obterLogs(logDTO.new(log)).then(success, error);                  

            function success(response){ 
                console.log(response)
            }

            function error(response){ 
                $scope.mensagem = response.data.message;
                return;
            } 
            $timeout( function(){ $scope.mensagemSucesso = ""; }, 100); 
        }catch (exception) {
            $scope.mensagem = exception
            return;
        }          
    }

    function atualizarClasses(){
        var classe = vm.log.classeSelect2.classe;
        vm.log.propriedadeSelect2 = "";
        logService.obterPropriedades(classe).then(success, error);
        function success(response){
            vm.propriedade = {};
            vm.propriedades = response.data;
        }
        function error(response){ 
           console.log(response)
        } 
    }

    function popularClasses(){
        logService.obterClasses().then(success, error); 
        function success(response){ 
            vm.classe = {};
            vm.classes = response.data;                
        }
        function error(response){ 
            $scope.mensagem = response.data.message;
            return;
        }            
    }

    function atualizarPropriedade (){
        vm.log.campoValue = null;
    }

});