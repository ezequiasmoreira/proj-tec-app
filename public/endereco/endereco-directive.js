angular.module('endereco',[])
.directive("enderecoModal", function() {
    var ddo = {};

    ddo.restric = "AE";

    ddo.templateUrl = "endereco/endereco.html"
    
    return ddo;
});