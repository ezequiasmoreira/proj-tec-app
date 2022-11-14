angular.module("projetoTecnico").factory("tipoRetornoEnum", function () {

	var _get = function () {   
		return {
			INTEGER: { "id" : "INTEGER", "value": "java.lang.Integer" },
			LONG: { "id" : "LONG", "value": "java.lang.Long" },
			FLOAT: {"id" : "FLOAT", "value": "java.lang.Float"},
			NUMBER: {"id" : "FLOAT", "value": "java.lang.Number"},
			DOUBLE: {"id" : "FLOAT", "value": "java.lang.Double"},
			SHORT: {"id" : "FLOAT", "value": "java.lang.Short"},
			CHARACTER: {"id" : "CHARACTER", "value": "java.lang.Character"},
			BYTE: {"id" : "BYTE", "value": "java.lang.Byte"},
			STRING: {"id" : "STRING", "value": "java.lang.String"},
			LIST: {"id" : "LIST", "value": "java.util.List"},
			SET: {"id" : "SET", "value": "java.util.Set"},
			DATE: {"id" : "DATE", "value": "java.util.Date"},
			LOCAL_DATE: {"id" : "LOCAL_DATE", "value": "java.time.LocalDate"},
			LOCAL_DATE_TIME: {"id" : "LOCAL_DATE_TIME", "value": "java.time.LocalDateTime"},
			LOCAL_TIME: {"id" : "LOCAL_TIME", "value": "java.time.LocalTime"},
			BIG_DECIMAL: {"id" : "BIG_DECIMAL", "value": "java.math.BigDecimal"},
			BOOLEAN: {"id" : "BOOLEAN", "value": "java.lang.Boolean"},
			LIST_OBJET: {"id" : "LIST_OBJET", "value": "lista de objeto"},
			SET_OBJET: {"id" : "SET_OBJET", "value": "set de objeto"},
			OBJET: {"id" : "OBJET", "value": "objeto"},
			VOID: {"id" : "VOID", "value": "void"},
			INT_PRIMITIVO: {"INT_PRIMITIVO" : "FLOAT", "value": "int"},
			FLOAT_PRIMITIVO: {"id" : "FLOAT_PRIMITIVO", "value": "float"},
			LONG_PRIMITIVO: {"id" : "LONG_PRIMITIVO", "value": "long"},
			SHORT_PRIMITIVO: {"id" : "SHORT_PRIMITIVO", "value": "short"},
			BYTE_PRIMITIVO: {"id" : "BYTE_PRIMITIVO", "value": "byte"},
			CHAR_PRIMITIVO: {"id" : "CHAR_PRIMITIVO", "value": "char"},
			DOUBLE_PRIMITIVO: {"id" : "DOUBLE_PRIMITIVO", "value": "double"},
			BOOLEAN_PRIMITIVO: {"id" : "BOOLEAN_PRIMITIVO", "value": "boolean"}
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
        return lista;
    }

	var _getTypeLocalDate = function(){
        var lista = [];
        lista.push(_get().LOCAL_DATE);
        return lista;
    }

	var _getTypeLocalDateTime = function(){
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
		getTypeLocalDate: _getTypeLocalDate,
		getTypeLocalDateTime: _getTypeLocalDateTime,
		getTypeTime: _getTypeTime,
		getTypeBoolean: _getTypeBoolean,
		getTypeList: _getTypeList
	};
});