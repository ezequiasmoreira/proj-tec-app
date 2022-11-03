angular.module("projetoTecnico").factory("logService", function ($http,config) {
    
	var _obterLogs = function (log) {   
		return $http.post(config.baseUrl + '/logs/filter', log);  	
	};

	var _obterClasses = function () {   
		return $http.get(config.baseUrl + '/logs/classes');  	
	};

	return {
		obterLogs: _obterLogs,
		obterClasses: _obterClasses
	};
});