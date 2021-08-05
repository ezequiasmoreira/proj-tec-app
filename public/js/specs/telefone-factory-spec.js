angular.module("projetoTecnico").factory("telefoneFactorySpec", function () {

	var _validarTelefone = function (telefone) {		
		if (!telefone.descricao) throw "Descrição obrigatório.";
		if (!telefone.numero) throw "Número obrigatório";
		if (!telefone.tipo) throw "Tipo obrigatório";
		return true;
	};

	return {
		validarTelefone: _validarTelefone
	};
});