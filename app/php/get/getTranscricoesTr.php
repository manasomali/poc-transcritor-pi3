<?php
include '../conect.php';
$data=json_decode(file_get_contents("php://input"));

$operador=mysqli_real_escape_string($conexao,$data->operador);
$centro=mysqli_real_escape_string($conexao,$data->centro);

$sql="SELECT id, assunto, eqp, local, DATE_FORMAT(datahorainicial, '%d/%m/%Y %H:%i:%s') AS datahorainicial, DATE_FORMAT(horainformada, '%H:%i') AS horainformada, agente, cortecarga, sgi, texto FROM tb_transcricoes WHERE operador='$operador' AND centro='$centro'";
$query=mysqli_query($conexao,$sql);
$i = 0;
while($row=mysqli_fetch_assoc($query))
{
    $request[$i] = $row;
    $i++;
}
echo json_encode($request);
?>