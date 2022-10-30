angular.module("projetoTecnico").factory("logService", function ($http,config) {
    
	var _obterLogs = function (log) {   
		return $http.post(config.baseUrl + '/logs/filter', log);  	
	};

	return {
		obterLogs: _obterLogs
	};
});