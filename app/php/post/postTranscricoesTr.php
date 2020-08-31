<?php
include '../conect.php';
$data=json_decode(file_get_contents("php://input"));

$assunto=mysqli_real_escape_string($conexao,$data->assunto);
$eqp=mysqli_real_escape_string($conexao,$data->eqp);
$local=mysqli_real_escape_string($conexao,$data->local);
$operador=mysqli_real_escape_string($conexao,$data->operador);
$datahorainicial=mysqli_real_escape_string($conexao,$data->datahorainicial);
$datahorafinal=mysqli_real_escape_string($conexao,$data->datahorafinal);
$horainformada=mysqli_real_escape_string($conexao,$data->horainformada);
$agente=mysqli_real_escape_string($conexao,$data->agente);
$cortecarga=mysqli_real_escape_string($conexao,$data->cortecarga);
$sgi=mysqli_real_escape_string($conexao,$data->sgi);
$texto=mysqli_real_escape_string($conexao,$data->texto);
$centro=mysqli_real_escape_string($conexao,$data->centro);

$sql="INSERT INTO tb_transcricoes (assunto, eqp, local, operador, datahorainicial, datahorafinal, horainformada, agente, cortecarga, sgi, texto, centro) VALUES ('$assunto', '$eqp', '$local', '$operador', '$datahorainicial', '$datahorafinal', '$horainformada', '$agente', '$cortecarga', '$sgi', '$texto', '$centro')";
$query=mysqli_query($conexao,$sql);

echo $sql;
?>