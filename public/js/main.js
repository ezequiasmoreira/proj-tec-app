angular.module('projetoTecnico', ['projetoTecnicoDiretivas','ngRoute','ui.router'])
.config(function($routeProvider){  
    
    $routeProvider.when('/inicio',{
        templateUrl:'pages/visao-geral.html',
        controller: 'projetoTecnicoController'
    });

    $routeProvider.when('/cliente-cadastro',{
        templateUrl:'pages/cliente/cadastro.html',
        controller: 'clienteController',
    });
    
    $routeProvider.when('/fornecedor-cadastro',{
        url: 'fornecedor',
        templateUrl:'fornecedor/fornecedor.html',
        controller: 'fornecedorController'
    });

    $routeProvider.otherwise({ redirectTo: '/inicio'});
});