abstract class Veiculo {

    tipo:string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }
  
  abstract mover(): void;


}

class Carro extends Veiculo {
    mover(): void {
        console.log("El caroro avanza a 40km/h")
    }
}

class motor extends Veiculo {
    mover(): void {
        console.log("El moto ruje fuerte")
    }
}
const carrito = new Carro("Hondo")
carrito.mover();
