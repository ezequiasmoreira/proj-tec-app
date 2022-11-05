angular.module("projetoTecnico").factory("logDTO", function () {

    var DIFERENCA_HORAS = 3;

	var _new = function (log) {   
		var logDTO = {};
		logDTO.classe = log.classe;
		logDTO.dataFinal = getDataFinal(log.dataFinal);
		logDTO.dataInicial = getDataInicial(log.dataInicial);
		logDTO.acao = log.acao;
		logDTO.campoName = log.campoName;''
		logDTO.campoValue = log.campoValue;
		logDTO.identificador = log.identificador;
		return logDTO;
	};	

	function getDataInicial(data){
		return getData(data);
	}

	function getDataFinal(data){
		return getData(data);
	}

	function getData(data){
		if(angular.isDefined(data)){
			data.setUTCHours(data.getUTCHours() - DIFERENCA_HORAS, data.getUTCMinutes()) 
		}
		return data;
	}

	return {
		new: _new
	};
});