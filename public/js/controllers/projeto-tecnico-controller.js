angular.module('projetoTecnico').controller('projetoTecnicoController', function($scope,$http){

    var url = window.location.href;
    var token = window.localStorage.getItem("token");

    if ((token == "null") && (url != "http://localhost:3000/") && (url != "http://localhost:3000/index.html")){
        window.location.href = '../..';
    }
    if ((token != "null")  && (url == "http://localhost:3000/") || (url == "http://localhost:3000/index.html")){
        window.location.href = '/principal.html#/inicio';
    }

    $http.defaults.headers.common['Content-Type'] = "application/x-www-form-urlencoded";

    if($scope.login){
        $http.defaults.headers.common['Authorization'] = "Basic Y2xpZW50ZToxMjM=";        
    }else{
        $http.defaults.headers.common['Authorization'] = "Bearer " + token;
    }   

    $scope.sair = function() {
        window.localStorage.setItem("token",null);
        window.location.href = '../../'; 
    }
});