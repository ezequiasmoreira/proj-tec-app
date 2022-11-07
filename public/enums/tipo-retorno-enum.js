angular.module("projetoTecnico").factory("tipoRetornoEnum", function () {

	var _get = function () {   
		return {
			INTEGER: { "id" : "INTEGER", "value": "java.lang.Integer" },
			LONG: { "id" : "LONG", "value": "java.lang.Long" },
			FLOAT: {"id" : "FLOAT", "value": "java.lang.Float"},
			NUMBER: {"id" : "FLOAT", "value": "java.lang.Number"},
			DOUBLE: {"id" : "FLOAT", "value": "java.lang.Double"},
			SHORT: {"id" : "FLOAT", "value": "java.lang.Short"},
			CHARACTER: {"id" : "FLOAT", "value": "java.lang.Character"},
			BYTE: {"id" : "FLOAT", "value": "java.lang.Byte"},
			STRING: {"id" : "FLOAT", "value": "java.lang.String"},
			LIST: {"id" : "FLOAT", "value": "java.util.List"},
			SET: {"id" : "FLOAT", "value": "java.util.Set"},
			DATE: {"id" : "FLOAT", "value": "java.util.Date"},
			LOCAL_DATE: {"id" : "FLOAT", "value": "java.time.LocalDate"},
			LOCAL_DATE_TIME: {"id" : "FLOAT", "value": "java.time.LocalDateTime"},
			LOCAL_TIME: {"id" : "FLOAT", "value": "java.time.LocalTime"},
			BIG_DECIMAL: {"id" : "FLOAT", "value": "java.math.BigDecimal"},
			BOOLEAN: {"id" : "FLOAT", "value": "java.lang.Boolean"},
			LIST_OBJET: {"id" : "FLOAT", "value": "lista de objeto"},
			SET_OBJET: {"id" : "FLOAT", "value": "set de objeto"},
			OBJET: {"id" : "FLOAT", "value": "objeto"},
			VOID: {"id" : "FLOAT", "value": "void"},
			INT_PRIMITIVO: {"id" : "FLOAT", "value": "int"},
			FLOAT_PRIMITIVO: {"id" : "FLOAT", "value": "float"},
			LONG_PRIMITIVO: {"id" : "FLOAT", "value": "long"},
			SHORT_PRIMITIVO: {"id" : "FLOAT", "value": "short"},
			BYTE_PRIMITIVO: {"id" : "FLOAT", "value": "byte"},
			CHAR_PRIMITIVO: {"id" : "FLOAT", "value": "char"},
			DOUBLE_PRIMITIVO: {"id" : "FLOAT", "value": "double"},
			BOOLEAN_PRIMITIVO: {"id" : "FLOAT", "value": "boolean"}
		}		
	};
	
	var _getTypeNumber = function(){
		var lista = [];
		lista.push(_get().INTEGER);
		lista.push(_get().LONG);
		lista.push(_get().FLOAT);
		lista.push(_get().NUMBER);
		lista.push(_get().DOUBLE);
		lista.push(_get().BYTE);
		lista.push(_get().BIG_DECIMAL);
		lista.push(_get().INT_PRIMITIVO);
		lista.push(_get().FLOAT_PRIMITIVO);
		lista.push(_get().LONG_PRIMITIVO);
		lista.push(_get().BYTE_PRIMITIVO);
		lista.push(_get().DOUBLE_PRIMITIVO);
		lista.push(_get().SET);
		lista.push(_get().LIST);
		return lista;
	}

	var _getTypeDate = function(){
        var lista = [];
        lista.push(_get().DATE);
        lista.push(_get().LOCAL_DATE);
        return lista;
    }

	var _getTypeDateTime = function(){
        var lista = [];
        lista.push(_get().LOCAL_DATE_TIME);
        return lista;
    }

	var _getTypeTime = function(){
        var lista = [];
        lista.push(_get().LOCAL_TIME);
        return lista;
    }

	var _getTypeBoolean = function(){
        var lista = [];
        lista.push(_get().BOOLEAN);
        lista.push(_get().BOOLEAN_PRIMITIVO);
        return lista;
    }

	var _getTypeList = function(){
        var lista = [];
        lista.push(_get().SET);
        lista.push(_get().LIST);
        return lista;
    }

	return {
		get: _get,
		getTypeNumber: _getTypeNumber,
		getTypeDate: _getTypeDate,
		getTypeDateTime: _getTypeDateTime,
		getTypeTime: _getTypeTime,
		getTypeBoolean: _getTypeBoolean,
		getTypeList: _getTypeList
	};
});