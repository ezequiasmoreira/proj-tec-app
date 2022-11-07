angular.module("projetoTecnico").factory("util", function () {

	var _primeiroValorMaiorQueSegundo = function (primeiroValor, segundoValor) {   
		return primeiroValor > segundoValor;
	};	

	return {
		primeiroValorMaiorQueSegundo: _primeiroValorMaiorQueSegundo
	};
});