<?php
include '../conect.php';
$data=json_decode(file_get_contents("php://input"));

$linhas=mysqli_real_escape_string($conexao,$data->linhas);

for($i=0;$i<$linhas;$i++)
{
	$sql[$i]="";
    $ide=mysqli_real_escape_string($conexao,$data->id[$i]);
	$as=mysqli_real_escape_string($conexao,$data->assunto[$i]);
	$e=mysqli_real_escape_string($conexao,$data->eqp[$i]);
	$l=mysqli_real_escape_string($conexao,$data->local[$i]);
	$o=mysqli_real_escape_string($conexao,$data->operador[$i]);
	$dhi=mysqli_real_escape_string($conexao,$data->datahorainicial[$i]);
	$datahora = explode(" ",$dhi);
	$ndata = explode("/",$datahora[0]);
	$nhora = explode(":",$datahora[1]);
	$dhi = $ndata[2]."-".$ndata[1]."-".$ndata[0]." ".$datahora[1];
	$dhf=mysqli_real_escape_string($conexao,$data->datahorafinal[$i]);
	$datahora = explode(" ",$dhf);
	$ndata = explode("/",$datahora[0]);
	$nhora = explode(":",$datahora[1]);
	$dhf = $ndata[2]."-".$ndata[1]."-".$ndata[0]." ".$datahora[1];
	$hi=mysqli_real_escape_string($conexao,$data->horainformada[$i]);
	$hi=$hi.":00";
	$ag=mysqli_real_escape_string($conexao,$data->agente[$i]);
	$cg=mysqli_real_escape_string($conexao,$data->cortecarga[$i]);
    $sg=mysqli_real_escape_string($conexao,$data->sgi[$i]);
    $t=mysqli_real_escape_string($conexao,$data->texto[$i]);
	$c=mysqli_real_escape_string($conexao,$data->centro[$i]);
	
	$sql[$i]="UPDATE tb_transcricoes SET ";
	$sql[$i]=$sql[$i]."assunto='$as'";
	$sql[$i]=$sql[$i].",eqp='$e'";
	$sql[$i]=$sql[$i].",local='$l'";
	$sql[$i]=$sql[$i].",operador='$o'";
	$sql[$i]=$sql[$i].",datahorainicial='$dhi'";
	$sql[$i]=$sql[$i].",datahorafinal='$dhf'";
	$sql[$i]=$sql[$i].",horainformada='$hi'";
	$sql[$i]=$sql[$i].",agente='$ag'";
	$sql[$i]=$sql[$i].",cortecarga='$cg'";
	$sql[$i]=$sql[$i].",sgi='$sg'";
	$sql[$i]=$sql[$i].",texto='$t'";
	$sql[$i]=$sql[$i].",centro='$c'";
	$sql[$i]=$sql[$i]." WHERE id=$ide";

	mysqli_query($conexao,$sql[$i]);
	echo " [$ide]";
}
?>
