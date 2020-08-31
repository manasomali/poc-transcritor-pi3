<?php
include '../conect.php';
$data=json_decode(file_get_contents("php://input"));

$linhas=mysqli_real_escape_string($conexao,$data->linhas);

for($i=0;$i<$linhas;$i++)
{
	$sql[$i]="";
    $ide=mysqli_real_escape_string($conexao,$data->id[$i]);

	$sql[$i]="DELETE FROM tb_transcricoes WHERE id=$ide";

	mysqli_query($conexao,$sql[$i]);
	echo " [$ide]";
}
?>
