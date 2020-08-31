app.controller('indexCtrl', function($scope,$http,$localStorage,$sessionStorage) {
   
    //$scope.usuario=$localStorage.usuario;
    $scope.enderecourl='https://manasomalidev.cf/';

    $scope.registrar=function()
    {
        if($scope.registro.senha1==$scope.registro.senha2)
        {
            $http( {
                method: 'POST',
                url: $scope.enderecourl + 'app/php/post/postRegistro.php',
                headers: {
                    'Content-Type': undefined
                },
                data: {
                "nome" : $scope.registro.nome,
                "sobrenome" :$scope.registro.sobrenome,
                "usuario" : $scope.registro.usuario,
                "email": $scope.registro.email,
                "senha" : $scope.registro.senha1,
                "setor": $scope.registro.setor,
                "instituicao": $scope.registro.instituicao,
                "cargo": $scope.registro.cargo,
                "regiao":$scope.registro.regiao

            }
        })
            .then(function(response){
                if(response.data=='Usuário já cadastrado')
                {
                    alert("Usuário já cadastrado");
                }
                else 
                {
                    alert("Cadastro Realizado com Sucesso");
                    $.modal.close();
                }
            }, function(){
                alert("Falhou");
            });
        }
        else
        {
            alert("As senhas não conferem!");
        }
    };

    $scope.logar=function()
    {
        $http({
            method: 'POST',
            url: $scope.enderecourl + 'app/php/get/getLogin.php',
            headers: {
                'Content-Type': undefined
            },
            data: 
                {   
                    "usuario" : $scope.login.usuario,
                    "senha" : $scope.login.senha
                }
        })
        .then(function(response){
            console.log(response.data);
            if(response.data=='Senha Incorreta')
            {
                alert("Senha Incorreta");
            }
            else if (response.data=='Usuario ou email não cadastrado')
            {
                alert("Usuario ou email não cadastrado");
            }
            else
            {
                $scope.usuario=response.data;
                $scope.usuario.logado=true;
                $.modal.close();
            }
        }, function(){
            alert("Senha ou usuario incorreto");
        });
    }
    $scope.logout=function()
    {
        $scope.usuario=null;
        $localStorage.$reset();
        window.location.reload();
    }

    $scope.alterarSenha=function()
    {
        if($scope.alterarSenha.senha1==$scope.alterarSenha.senha2)
        {
            $http({
            method: 'POST',
            url: $scope.enderecourl + 'app/php/post/postMudarSenha.php',
            headers: {
                'Content-Type': undefined
            },
            data: 
                { 
                    "usuario" : $scope.usuario.id, 
                    "senha" : $scope.alterarSenha.senha, 
                    "senhanova" : $scope.alterarSenha.senhanova
                }
        })
        .then(function(response){
            $scope.alter=response.data;
            console.log($scope.alter);
            if ($scope.alter=="1")
            {
                alert("Senha alterada com sucesso!");
                $location.path("/");
            }else
            {
                alert("A senha informada não conferem!");
            }
            
        }, function(){
            
        });

        }
        else
        {
            alert("As senhas não conferem");
        }
    }
});