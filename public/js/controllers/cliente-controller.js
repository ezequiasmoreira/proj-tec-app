angular.module('projetoTecnico').controller('clienteController', function($scope,clienteFactoryService,telefoneFactoryService,enderecoFactoryService){
    $scope.cliente = {};
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
        $scope.telefones = $scope.telefones.filter(function(telefone){
            if(telefone.$$hashKey != telefoneExcluir.$$hashKey){
                return telefone;
            }
        });   
    }

    $scope.editarTelefone = function(telefone) {
        $scope.telefone.id = telefone.id;
        $scope.telefone.descricao = telefone.descricao;
        $scope.telefone.numero = telefone.numero;
        $scope.telefone.tipo = telefone.tipo;
        $scope.telefone.$$hashKey = telefone.$$hashKey;
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
        $scope.enderecos = $scope.enderecos.filter(function(endereco){
            if(endereco.$$hashKey != enderecoExcluir.$$hashKey){
                return endereco;
            }
        });   
    }

    $scope.editarEndereco = function(endereco) {
        $scope.endereco.id = endereco.id;
        $scope.endereco.descricao = endereco.descricao;
        $scope.endereco.numero = endereco.numero;
        $scope.endereco.logradouro = endereco.logradouro;
        $scope.endereco.complemento = endereco.complemento;
        $scope.endereco.cep = endereco.cep;
        $scope.endereco.principal = endereco.principal;
        $scope.endereco.$$hashKey = endereco.$$hashKey;
        $('#modalEndereco').modal("show");
    }

    $scope.cadastrarCliente = function(cliente) {    
       clienteFactoryService.cadastrar($scope.cliente).then(successCallback, errorCallback);

       function successCallback(response){    
           console.log(response);
       }

       function errorCallback(response){ 
           var  mensagem = "Erro ao cadastrar o cliente"
           return;
       }         
    }
    
    
});