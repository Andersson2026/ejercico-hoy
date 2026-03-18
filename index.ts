abstract class Animal {

    nombre:string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    comer(){
        console.log(this.nombre + " esta comida")
    }

    abstract hacerSonido(): void;

}

class Perro extends Animal {
    hacerSonido(): void {
        console.log("Guau")
    }
}

class gato extends Animal {
    hacerSonido(): void {
        console.log("Miau")
    }
}

const perro = new Perro("Firulais");
perro.comer();
perro.hacerSonido();