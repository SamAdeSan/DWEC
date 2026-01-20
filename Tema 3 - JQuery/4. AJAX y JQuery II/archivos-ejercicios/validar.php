<?php

$usuario = isset($_GET['usuario']) ? $_GET['usuario'] : '';
$clave = isset($_GET['clave']) ? $_GET['clave'] : '';

if ($usuario === 'pepe' && $clave === 'hola') {
    echo "usuario correcto";
} else {
    echo "usuario incorrecto";
}