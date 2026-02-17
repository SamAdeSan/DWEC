class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    obtenerDatos() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`;
    }
}
alert(new Alumno("Pedro López", 18, "1CFSJ").obtenerDatos());
export {};
//# sourceMappingURL=main.js.map