angular.module('projetoTecnico', ['projetoTecnicoDiretivas','componentes','ngRoute','ui.router'])
.config(function($routeProvider){  
    
    $routeProvider.when('/inicio',{
        templateUrl:'visao-geral.html',
        controller: 'projetoTecnicoController'
    });

    $routeProvider.when('/cliente-cadastro',{
        templateUrl:'cliente/cliente.html',
        controller: 'clienteController',
    });
    
    $routeProvider.when('/fornecedor-cadastro',{
        templateUrl:'fornecedor/fornecedor.html',
        controller: 'fornecedorController'
    });

    $routeProvider.when('/log-listagem',{
        templateUrl:'log/log.html',
        controller: 'logController'
    });

    $routeProvider.otherwise({ redirectTo: '/inicio'});
});