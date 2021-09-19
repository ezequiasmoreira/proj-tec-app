angular.module('telefone',[])
.directive("telefoneModal", function() {
    var ddo = {};
    
    ddo.restric = "AE";

    ddo.templateUrl = "telefone/telefone-modal.html"
    
    return ddo;
}).directive("telefoneInput", function() {
    var ddo = {};
    
    ddo.restric = "AE";

    ddo.templateUrl = "telefone/telefone-input.html"
    
    return ddo;
});