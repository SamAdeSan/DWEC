class Alumno {
    public nombre: string;
    public edad: number;
    public curso: string;
    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    public obtenerDatos(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`;
    }
}
alert(new Alumno("Pedro López", 18, "1CFSJ").obtenerDatos());