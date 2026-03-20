
abstract class Figura {

  abstract area(a:string,b:string): void;
  //abstract perimetro(): void;

}

class Rectangulo extends Figura {
    area(base:string, altura:string): void {
        const area= parseFloat(base)*parseFloat(altura);
        console.log(area);
    }
}

class Circulo extends Figura {

    area(pi: string, r:string): void {
        const area= parseFloat(pi)*(parseFloat(r)*parseFloat(r));
        console.log(area)
    }
}
class cuadrado extends Figura {
    
    area(l: string): void {
        const area= parseFloat(l)*(parseFloat(l)*parseFloat(l));
        console.log(area)
    }
}
const rec = new Rectangulo();
const cir = new Circulo();
const cua = new cuadrado();
rec.area('23', '14');
cir.area('6.344','5.3');
cua.area('2.4')