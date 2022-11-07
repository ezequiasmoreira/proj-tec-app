angular.module('projetoTecnico').controller('logController', function($scope, logService, logDTO, 
    util, tipoRetornoEnum){ 
    
    vm = $scope;
    var ZERO = 0;
    var VAZIO = "";
    var TEXT = "text";
    var TIME = "time";
    var DATE = "date";
    var LOCAL_DATE = "datetime-local";
    var NUMBER = "number";
    var MENSAGEM_PLACEHOLDER_LIST = "Digite um id";
    var MENSAGEM_PLACEHOLDER_BOOLEAN = "Digite true ou false";

    popularClasses();
    
    vm.log ={};
    vm.atualizarClasses = atualizarClasses;
    vm.obterLogs = obterLogs;
    vm.getTypeInput = getTypeInput;
    vm.getPlaceholder = getPlaceholder;
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
            $timeout( function(){ $scope.mensagemSucesso = VAZIO; }, 100); 
        }catch (exception) {
            $scope.mensagem = exception
            return;
        }          
    }

    function atualizarClasses(){
        var classe = vm.log.classeSelect2.classe;
        vm.log.propriedadeSelect2 = VAZIO;
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

    function atualizarPropriedade(){
        vm.log.campoValue = null;
    }

    function getTypeInput(){        
        var tipos = getTypeDate().filter(temTipoIgualType);
        if (util.primeiroValorMaiorQueSegundo(tipos.length, ZERO))  {
            return DATE;
        }

        tipos = getTypeDateTime().filter(temTipoIgualType);
        if (util.primeiroValorMaiorQueSegundo(tipos.length, ZERO))  {
            return LOCAL_DATE;
        }

        tipos = getTypeTime().filter(temTipoIgualType);
        if (util.primeiroValorMaiorQueSegundo(tipos.length, ZERO))  {
            return TIME;
        }

        tipos = getTypeNumber().filter(temTipoIgualType);
        if (util.primeiroValorMaiorQueSegundo(tipos.length, ZERO))  {
            return NUMBER;
        }
        return TEXT;    
    }   

    function getPlaceholder(){
        if (angular.isUndefined(vm.log.propriedadeSelect2)){
            return VAZIO;
        }
        var tipos = getTypeBoolean().filter(temTipoIgualType);
        if (util.primeiroValorMaiorQueSegundo(tipos.length, ZERO))  {
            return MENSAGEM_PLACEHOLDER_BOOLEAN;
        }
        tipos = getTypeList().filter(temTipoIgualType);
        if (util.primeiroValorMaiorQueSegundo(tipos.length, ZERO))  {
            return MENSAGEM_PLACEHOLDER_LIST;
        }
    }   

    function temTipoIgualType(obj){
        if (angular.isDefined(vm.log.propriedadeSelect2)){
            return obj.value == vm.log.propriedadeSelect2.tipo;
        }
    }

    function getTypeDate(){ return tipoRetornoEnum.getTypeDate(); }    
    function getTypeTime(){ return tipoRetornoEnum.getTypeTime(); }
    function getTypeList(){  return tipoRetornoEnum.getTypeList(); }
    function getTypeNumber(){ return tipoRetornoEnum.getTypeNumber(); }
    function getTypeBoolean(){  return tipoRetornoEnum.getTypeBoolean(); }
    function getTypeDateTime(){ return tipoRetornoEnum.getTypeDateTime(); }   

    
});