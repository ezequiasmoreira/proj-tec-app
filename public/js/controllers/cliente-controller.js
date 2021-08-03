angular.module('projetoTecnico').controller('clienteController', function($scope,clienteFactoryService,telefoneFactoryService,enderecoFactoryService){
    $scope.cliente = {};
    $scope.listaClientes = [];
    $scope.telefones = [];    
    $scope.enderecos = [];
    $scope.cliente.telefones = [];
    $scope.cliente.enderecos = [];    

    $scope.salvarTelefone = function() { 
        var telefone =  $scope.telefone;
        if (telefone.$$hashKey == undefined){
            $scope.telefones.push(telefone);
            $scope.cliente.telefones.push(telefoneFactoryService.new(telefone));
        }else{
            for(i in $scope.telefones) {
                if($scope.telefones[i].$$hashKey == $scope.telefone.$$hashKey) {
                    $scope.telefones[i] = $scope.telefone;
                    $scope.cliente.telefones[i] = telefoneFactoryService.new($scope.telefone);
                }
            }
        }
        $scope.telefone = [];
        $('#modalTelefone').modal("hide");
    }

    $scope.excluirTelefone = function(telefoneExcluir) {
        $scope.telefones = telefoneFactoryService.excluirTelefone($scope.telefones,telefoneExcluir);   
    }

    $scope.editarTelefone = function(telefone) {
        telefoneFactoryService.editarTelefone($scope,telefone);       
        $('#modalTelefone').modal("show");
    }

    $scope.salvarEndereco = function() {
        var endereco =  $scope.endereco;
        if (endereco.$$hashKey == undefined){
            $scope.enderecos.push(endereco);
            $scope.cliente.enderecos.push(enderecoFactoryService.new(endereco));
        }else{
            for(i in $scope.enderecos) {
                if($scope.enderecos[i].$$hashKey == $scope.endereco.$$hashKey) {
                    $scope.enderecos[i] = $scope.endereco;                    
                    $scope.cliente.enderecos[i] = enderecoFactoryService.new($scope.endereco);
                }
            }
        }
        $scope.endereco = [];
        $('#modalEndereco').modal("hide");
    }

    $scope.excluirEndereco = function(enderecoExcluir) {
        $scope.enderecos = enderecoFactoryService.excluirEndereco($scope.enderecos,enderecoExcluir); 
    }

    $scope.editarEndereco = function(endereco) {
        enderecoFactoryService.excluirEndereco($scope,endereco); 
        $('#modalEndereco').modal("show");
    }

    $scope.cadastrarCliente = function(cliente) {    
    
        if(cliente.id){
            clienteFactoryService.atualizar($scope.cliente).then(successCallback, errorCallback);
        }else{
            clienteFactoryService.salvar($scope.cliente).then(successCallback, errorCallback);
        }       

        function successCallback(response){ 
            $scope.cliente.id = response.data.id   
            console.log(response);
        }

        function errorCallback(response){ 
            var  mensagem = "Erro ao cadastrar o cliente"
            return;
        }         
    }

    $scope.editarCliente = function(cliente) {
        $scope.cliente = cliente;
        $scope.telefones = cliente.telefones;
        $scope.enderecos = cliente.enderecos;
        $('#modalPesquisaCliente').modal("hide");
    }

    $scope.excluirCliente = function(clienteExcluir) {
        clienteFactoryService.excluir(clienteExcluir).then(success, error);

        function success(){ 
            $scope.listaClientes = $scope.listaClientes.filter(function(cliente){
                if(cliente.$$hashKey != clienteExcluir.$$hashKey){
                    return cliente;
                }
            });  
        }

        function error(response){ 
            var  mensagem = "Erro ao cadastrar o cliente"
            return;
        }                 
    }

    $scope.pesquisarClientes = function() {        
        clienteFactoryService.obterTodos().then(successCallback, errorCallback);            

        function successCallback(response){ 
            $scope.listaClientes = response.data;
        }

        function errorCallback(response){ 
            var  mensagem = "Erro ao buscar os clientes"
            return;
        }         
    }
    
    $scope.novo = function() {   
        $scope.cliente = [];
        $scope.telefones = [];
        $scope.enderecos = [];
    }
});