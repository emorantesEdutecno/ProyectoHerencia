
class Persona{
    constructor(nombre,anioNacimiento, idioma){
        this.nombre = nombre;
        this.anioNacimiento = anioNacimiento;
        this.idioma = idioma;
    }

    saludar(){
        let mensaje = `Hola, me llamo ${this.nombre}, y mi idioma es ${this.idioma}`;
        return mensaje;
    }

    mostrarNombre(){
        return this.nombre;
    }

    calcularEdad(){
        let edad = new Date().getFullYear() - this.anioNacimiento;
        return edad;
    }
}

class Programador extends Persona{
    // crear un método especializado para programador
    constructor(nombre, anioNacimiento, idioma, lenguaje){
        // super() DEBE SER LA PRIMERA INSTRUCCIÓN EN EL CONSTRUCTOR DE LA CLASE HIJA, O DE LO CONTRARIO MARCARÁ UN ERROR
        super(nombre,anioNacimiento,idioma);
        // atributos especializados
        this.lenguaje = lenguaje;
    }

    // métodos especializados
    presumir(){
        let mensaje = `Hola, soy ${this.nombre}, y mi lenguaje de programación es ${this.lenguaje}`;
        return mensaje;
    }
}

class FrontEnd extends Programador{
    constructor(nombre, anioNacimiento, idioma, lenguaje,framework,aniosSenority){
        super(nombre, anioNacimiento, idioma, lenguaje);
        this.framework = framework;
        this.aniosSenority = aniosSenority;
    }

    quejarse(){
        let mensaje= `Me llamo ${this.nombre}, programo en el framework de ${this.framework} hace ${this.aniosSenority} años, pero no  gano lo suficiente`;
        return mensaje;
    }
}



function pruebaOrientadaAObjetos(){

    const isabel = new Persona('Isabel Cruz', 1985, 'Inglés');
    console.log(isabel);
    console.log(isabel.saludar());
    console.log(`La edad de ${isabel.mostrarNombre()} es ${isabel.calcularEdad()}`);

    const elfar = new Programador('Elfar Morantes', 1983, 'Espanol', 'Javascript');
    console.log(elfar);
    console.log(elfar.saludar());
    console.log(elfar.presumir());

    const jessie = new FrontEnd('Jessie Uribe', 2000, 'Espanol', 'Javascript', 'VueJS', 1);
    console.log(jessie);
    console.log(jessie.saludar());
    console.log(jessie.presumir());
    console.log(jessie.quejarse());

    var a = 123;
    console.log(a);
    console.log(`typeof(a): ${typeof(a)}`);

    var b = String(a);
    console.log(b);
    console.log(`typeof(b): ${typeof(b)}`);

}

export{
    Persona,
    Programador,
    FrontEnd,
    pruebaOrientadaAObjetos
};

