angular.module('projetotecnico', ['projetotecnicoDiretivas','ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/inicio',{
        templateUrl:'pages/visao-geral.html',
        controller: 'ProjetotecnicoController'
    });

    $routeProvider.otherwise({ redirectTo: '/inicio'});
});