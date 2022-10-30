angular.module('projetoTecnico').config(function($stateProvider){  
    
    var fornecedor = {
        name: 'fornecedor-cadastro',
        url: 'fornecedor-cadastro',
        templateUrl:'fornecedor/fornecedor.html'
    }

    var cliente = {
        name: 'cliente-cadastro',
        url: 'cliente-cadastro',
        templateUrl:'cliente/cliente.html',
        //params: {'clienteId':null}
    }

    var log = {
        name: 'log-listagem',
        url: 'log-listagem',
        templateUrl:'log/log.html'
    }

    $stateProvider.state(fornecedor);
    $stateProvider.state(cliente);
    $stateProvider.state(log);
});