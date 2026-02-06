<?php
$conexion = new mysqli("localhost", "root", "", "DB_EJ1");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$q = $_GET['q'] ?? '';

$sql = "SELECT * FROM usuarios WHERE nombre LIKE '%$q%' OR profesion LIKE '%$q%'";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    echo "<table><thead>
            <tr><th>Nombre</th><th>Email</th><th>Profesión</th></tr></thead>";
    while($fila = $resultado->fetch_assoc()) {
        echo "<tr>
                <td>{$fila['nombre']}</td>
                <td>{$fila['email']}</td>
                <td>{$fila['profesion']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No se encontraron resultados.";
}

$conexion->close();