<?php
include '../conect.php';
$data=json_decode(file_get_contents("php://input"));
$nome=mysqli_real_escape_string($conexao,$data->nome);
$sobrenome=mysqli_real_escape_string($conexao,$data->sobrenome);
$usuario=mysqli_real_escape_string($conexao,$data->usuario);
$email=mysqli_real_escape_string($conexao,$data->email);
$senha=mysqli_real_escape_string($conexao,$data->senha);
$instituicao=mysqli_real_escape_string($conexao,$data->instituicao);
$cargo=mysqli_real_escape_string($conexao,$data->cargo);
$setor=mysqli_real_escape_string($conexao,$data->setor);
$regiao=mysqli_real_escape_string($conexao,$data->regiao);

$senha=sha1($senha);

$sql="SELECT * FROM tb_usuarios WHERE usuario='$usuario' OR email='$email'";
$query=mysqli_query($conexao,$sql);
$i = 0;
while($row=mysqli_fetch_assoc($query))
{
    $user = $row;
	$i++;
}
if($user=="") {
    $sql="INSERT INTO tb_usuarios (nome,sobrenome,usuario,email,senha,instituicao,cargo,setor,regiao) VALUES ('$nome','$sobrenome','$usuario','$email','$senha','$instituicao','$cargo','$setor','$regiao')";
    mysqli_query($conexao,$sql);
    echo $user;
}
else {
    echo 'Usuário já cadastrado';
}
?>