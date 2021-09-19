angular.module('telefone',[])
.directive("telefoneModal", function() {
    var ddo = {};
    
    ddo.restric = "AE";

    ddo.templateUrl = "telefone/telefone.html"
    
    return ddo;
});