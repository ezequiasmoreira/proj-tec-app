angular.module('projetoTecnico', ['projetoTecnicoDiretivas','ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/inicio',{
        templateUrl:'pages/visao-geral.html',
        controller: 'ProjeTotecnicoController'
    });

    $routeProvider.otherwise({ redirectTo: '/inicio'});
});