abstract class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    abstract calcularPrecioFinal(): void;
    abstract mostrarInformacion(): void;
}

class Electronico extends Producto {
    calcularPrecioFinal(): void {
        let impuesto = this.precio * 0.13;
        let total = this.precio + impuesto;
        console.log("Precio final (Electrónico): $" + total);
    }

    mostrarInformacion(): void {
        console.log("Producto Electrónico: " + this.nombre);
        console.log("Precio base: $" + this.precio);
    }
}

class Ropa extends Producto {
    calcularPrecioFinal(): void {
        let descuento = this.precio * 0.10;
        let total = this.precio - descuento;
        console.log("Precio final (Ropa): $" + total);
    }

    mostrarInformacion(): void {
        console.log("Producto Ropa: " + this.nombre);
        console.log("Precio base: $" + this.precio);
    }
}

class Alimento extends Producto {
    calcularPrecioFinal(): void {
        let impuesto = this.precio * 0.05;
        let total = this.precio + impuesto;
        console.log("Precio final (Alimento): $" + total);
    }

    mostrarInformacion(): void {
        console.log("Producto Alimento: " + this.nombre);
        console.log("Precio base: $" + this.precio);
    }
}

const prod1 = new Electronico("Laptop", 1000);
const prod2 = new Ropa("Camisa", 50);
const prod3 = new Alimento("Manzanas", 10);

prod1.mostrarInformacion();
prod1.calcularPrecioFinal();

prod2.mostrarInformacion();
prod2.calcularPrecioFinal();

prod3.mostrarInformacion();
prod3.calcularPrecioFinal();