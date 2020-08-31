<?php
include '../conect.php';
$data=json_decode(file_get_contents("php://input"));
$usuario=mysqli_real_escape_string($conexao,$data->usuario);
$senha=mysqli_real_escape_string($conexao,$data->senha);
$senha=sha1($senha);
$sql="SELECT * FROM tb_usuarios WHERE usuario='$usuario' OR usuario='$email'";
$query=mysqli_query($conexao,$sql);
$i = 0;
while($row=mysqli_fetch_assoc($query))
{
	$user = $row;
	$i++;
}
if($i==0)
{
	echo 'Usuario ou email não cadastrado';
}
else {
	if($senha==$user['senha'])
	{
		unset($user['senha']);
		echo json_encode($user);
	}
	else
	{
		echo 'Senha Incorreta';
	}
}
?>