angular.module('projetoTecnico', ['projetoTecnicoDiretivas','ngRoute'])
.config(function($routeProvider){  
    
    $routeProvider.when('/inicio',{
        templateUrl:'pages/visao-geral.html',
        controller: 'projetoTecnicoController'
    });

    $routeProvider.when('/cliente-cadastro',{
        templateUrl:'pages/cliente/cadastro.html',
        controller: 'clienteController'
    });

    $routeProvider.otherwise({ redirectTo: '/inicio'});
});