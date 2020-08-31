<?php
include '../conect.php';

$sql="SELECT id, assunto, eqp, local, operador, DATE_FORMAT(datahorainicial, '%d/%m/%Y %H:%i:%s') AS datahorainicial, DATE_FORMAT(datahorafinal, '%d/%m/%Y %H:%i:%s') AS datahorafinal, DATE_FORMAT(horainformada, '%H:%i') AS horainformada, agente, cortecarga, sgi, texto, centro FROM tb_transcricoes";
$query=mysqli_query($conexao,$sql);
$i = 0;
while($row=mysqli_fetch_assoc($query))
{
    $request[$i] = $row;
    $i++;
}
echo json_encode($request);
?>