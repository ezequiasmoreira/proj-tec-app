angular.module('projetoTecnico', ['projetoTecnicoDiretivas','ngRoute'])
.config(function($routeProvider){  
    
    $routeProvider.when('/inicio',{
        templateUrl:'pages/visao-geral.html',
        controller: 'projetoTecnicoController'
    });

    $routeProvider.otherwise({ redirectTo: '/inicio'});
});