angular.module('projetoTecnico').controller('logController', function($scope, logService, logDTO, 
    util, tipoRetornoEnum){ 
    
    vm = $scope;
    var ZERO = 0;
    var VAZIO = "";
    var TEXT = "text";
    var TIME = "time";
    var DATE = "date";
    var PT_BR = "pt-BR";
    var LOCAL_DATE = "datetime-local";
    var NUMBER = "number";
    var VIRGULA = ", ";
    var DIA_DEDUZIR = 1;
    var CODIGO_ATUALIZAR = 2; 
    var ACAO_CRIAR = 'CRIAR';    
    var ACAO_EXCLUIR = 'EXCLUIR';
    var ACAO_ATUALIZAR = 'ATUALIZAR';
    var CLASSE_CRIAR = 'text-primary';
    var CLASSE_EXCLUR = 'text-danger';
    var CLASSE_ATUALIZAR = 'text-success';      
    var MENSAGEM_PLACEHOLDER_LIST = "Digite um id";
    var MENSAGEM_PLACEHOLDER_BOOLEAN = "Digite true ou false";

    popularClasses();
    
    vm.log ={};
    vm.logFilter= {};
    vm.logFilters = [];
    vm.atualizarClasses = atualizarClasses;
    vm.obterLogs = obterLogs;
    vm.getTypeInput = getTypeInput;
    vm.getPlaceholder = getPlaceholder;
    vm.getAcaoParaExibir = getAcaoParaExibir;
    vm.getDataParaExibir = getDataParaExibir;
    vm.getPropriedadeValor = getPropriedadeValor;
    vm.atualizarPropriedade = atualizarPropriedade;
    
    function obterLogs (log) {
        try{
            log.classe = log.classeSelect2.classe;
            log.campoName = log.propriedadeSelect2.nome;
            logService.obterLogs(logDTO.new(log)).then(success, error);                  

            function success(response){ 
                vm.logFilters = response.data;
                atualizarPropriedadesAlterada();
                console.log(response)
                console.log(vm.propriedades)
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

        tipos = getTypeLocalDateTime().filter(temTipoIgualType);
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

    function temTipoIgualType(obj, tipo){
        if (angular.isDefined(tipo)) return obj.value == tipo;        

        if (angular.isDefined(vm.log.propriedadeSelect2))
            return obj.value == vm.log.propriedadeSelect2.tipo;        
    }

    function getTypeDate(){ return tipoRetornoEnum.getTypeDate(); }    
    function getTypeTime(){ return tipoRetornoEnum.getTypeTime(); }
    function getTypeList(){  return tipoRetornoEnum.getTypeList(); }
    function getTypeNumber(){ return tipoRetornoEnum.getTypeNumber(); }
    function getTypeBoolean(){  return tipoRetornoEnum.getTypeBoolean(); }
    function getTypeLocalDate(){ return tipoRetornoEnum.getTypeLocalDate(); }  
    function getTypeLocalDateTime(){ return tipoRetornoEnum.getTypeLocalDateTime(); }  
    
    function isDate(tipo){ 
        var datas =  getTypeDate().filter(x => temTipoIgualType(x, tipo));
        return util.primeiroValorMaiorQueSegundo(datas.length, ZERO);        
    }

    function isLocalDate(tipo){ 
        var datas = getTypeLocalDate().filter(x => temTipoIgualType(x, tipo));
        return util.primeiroValorMaiorQueSegundo(datas.length, ZERO);        
    } 

    function isLocalDateTime(tipo){ 
        var datas = getTypeLocalDateTime().filter(x => temTipoIgualType(x, tipo));
        return util.primeiroValorMaiorQueSegundo(datas.length, ZERO);        
    } 

    function isTime(tipo){ 
        var horas = getTypeTime().filter(x => temTipoIgualType(x, tipo));
        return util.primeiroValorMaiorQueSegundo(horas.length, ZERO);        
    }  

    function getDataParaExibir(data){ 
        return new Date(data).toLocaleString(PT_BR); 
    }
    
    function getTimeParaExibir(data){
        return new Date(null, null , null, data.hour, data.minute, data.second).toLocaleTimeString(PT_BR); 
    }

    function getLocalDataParaExibir(data){
        return new Date(data.year, data.month - DIA_DEDUZIR, data.day).toLocaleDateString(PT_BR); 
    }

    function getLocalDataTimeParaExibir(data){ 
        if (angular.isDefined(data.date) && angular.isDefined(data.time))
            return new Date(data.date.year, data.date.month - DIA_DEDUZIR, data.date.day,
                            data.time.hour, data.time.minute, data.time.second).toLocaleString(PT_BR); 
    }
    
    function getAcaoParaExibir(codigoAcao){ 
        var acaoEntity = {
            nome: ACAO_CRIAR,
            classe: CLASSE_CRIAR
        } 

        if (codigoAcao > 1) {
            acaoEntity.nome = codigoAcao == CODIGO_ATUALIZAR ? ACAO_ATUALIZAR : ACAO_EXCLUIR;
            acaoEntity.classe = codigoAcao == CODIGO_ATUALIZAR ? CLASSE_ATUALIZAR : CLASSE_EXCLUR;
        }
        return acaoEntity;
    }

    function getPropriedadeValor(propriedade, log){        
        logRegistro = JSON.parse(log);
        valorRetorno = logRegistro[propriedade.nome];

        if (angular.isObject(valorRetorno) && valorRetorno.length > ZERO){
            var ids = VAZIO;
            valorRetorno.forEach(obj => {
                ids += ids == VAZIO ? obj.id : VIRGULA + obj.id;
            });
            valorRetorno = ids;
        }
        
        if (angular.isObject(valorRetorno) && propriedade.object){            
            valorRetorno = valorRetorno.id;
        }
        
        if (!propriedade.object){ 
            if (isTime(propriedade.tipo)) return getTimeParaExibir(valorRetorno);
            if (isDate(propriedade.tipo)) return getDataParaExibir(valorRetorno);
            if (isLocalDate(propriedade.tipo)) return getLocalDataParaExibir(valorRetorno);            
            if (isLocalDateTime(propriedade.tipo)) return getLocalDataTimeParaExibir(valorRetorno);
        }
        return valorRetorno; 
    }

    function atualizarPropriedadesAlterada(){ 
        vm.propriedades.forEach(propriedade => { 
            vm.logFilters.forEach(log => {
                var campos = JSON.parse(log.campos);                    
                var campoValor = campos[propriedade.nome];
                if (angular.isObject(campoValor)&& util.primeiroValorMaiorQueSegundo(campoValor.length, ZERO)) {
                    var ids = VAZIO;
                    campoValor.forEach(obj => {
                        ids += ids == VAZIO ? obj.id : VIRGULA + obj.id;
                    });
                    campoValor = ids;
                }
                if (angular.isObject(campoValor) && propriedade.object){            
                    campoValor = campoValor.id;
                }
                var ps = getPropriedadesAlterada(propriedade, campoValor);
                if (util.primeiroValorMaiorQueSegundo(ps.length, 1)){
                    propriedade.hasAlteracao = true;
                }
            });
        });
    }

    function getPropriedadesAlterada(propriedade, valor){ 
        var propriedades = [];
        vm.logFilters.forEach(log => {
            var campos = JSON.parse(log.campos);
            Object.keys(campos).forEach(campo => {                
                var campoValor = campos[campo];
                if (angular.isObject(campoValor)&& util.primeiroValorMaiorQueSegundo(campoValor.length, ZERO)) {
                    var ids = VAZIO;
                    campoValor.forEach(obj => {
                        ids += ids == VAZIO ? obj.id : VIRGULA + obj.id;
                    });
                    campoValor = ids;
                }
                if (angular.isObject(campoValor) && propriedade.object){            
                    campoValor = campoValor.id;
                }
                if ((campo == propriedade.nome) && ( campoValor != valor)){
                    propriedades.push(propriedade);
                }
            });
        });
        return propriedades;
    }
});