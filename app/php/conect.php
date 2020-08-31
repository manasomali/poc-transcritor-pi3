<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html; charset=utf-8');

setlocale(LC_ALL,'pt_BR.UTF8');
mb_internal_encoding('UTF8'); 
mb_regex_encoding('UTF8');

define('HOST','sql306.epizy.com');
define('USUARIO','user');
define('SENHA','senha');
define('DB','epiz_25355873_db');
$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB);

// Check connection
if (!$conexao) {
    die("Connection failed: " . mysqli_connect_error());
}
mysql_query("SET NAMES 'utf8'", $conexao);
mysql_query('SET character_set_connection=utf8', $conexao);
mysql_query('SET character_set_client=utf8', $conexao);
mysql_query('SET character_set_results=utf8', $conexao);
?>