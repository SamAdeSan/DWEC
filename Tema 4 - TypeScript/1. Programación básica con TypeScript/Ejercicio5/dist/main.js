class Curso {
    constructor(codigo, descripcion) {
        this.codigo = codigo;
        this.descripcion = descripcion;
    }
}
class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    obtenerDatosCompletos() {
        return `Nombre: ${this.nombre}\n` +
            `Edad: ${this.edad} años\n` +
            `Código de Curso: ${this.curso.codigo}\n` +
            `Descripción: ${this.curso.descripcion}`;
    }
}
const miCurso = new Curso("1CFSJ", "Primer curso de grado superior de DAW");
const miAlumno = new Alumno("Pedro López", 18, miCurso);
alert(miAlumno.obtenerDatosCompletos());
export {};
//# sourceMappingURL=main.js.map