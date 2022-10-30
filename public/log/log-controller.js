angular.module('projetoTecnico').controller('logController', function($scope, logService){  

    $scope.obterLogs = function(log) {
        try{
            if(angular.isDefined(log.dataInicial) && angular.isDefined(log.dataInicialHora)){
                log.dataInicial.setUTCHours(log.dataInicialHora.getUTCHours() - 3, log.dataInicialHora.getUTCMinutes()) 
            }
            if(angular.isDefined(log.dataFinal) && angular.isDefined(log.dataFinalHora)){
                log.dataFinal.setUTCHours(log.dataFinalHora.getUTCHours() - 3, log.dataFinalHora.getUTCMinutes()) 
            }
            logService.obterLogs(log).then(success, error);                  

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
});