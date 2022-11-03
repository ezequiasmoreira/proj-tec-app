angular.module('projetoTecnico').controller('logController', function($scope, logService){ 
    
    popularClasses();
    $scope.log ={};
    $scope.obterLogs = function(log) {
        try{
            log.classe = log.classeSelect2.classe;
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

    $scope.person = {};
    $scope.people = [
      { name: 'Adam',      email: 'adam@email.com',      age: 10 },
      { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
      { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
      { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
      { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
      { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
      { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
      { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
    ];

    function popularClasses(){
        try{
            logService.obterClasses().then(success, error);                  

            function success(response){ 
                $scope.classes = response.data;
                $scope.classe = {};
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