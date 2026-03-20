
abstract class pago{

    total: string;
    constructor(total: string){
        this.total = total  
    }

    abstract ProcesarPago(a:string): void;
          // abastract perimetro(): void;
    
} 

class efectivo extends pago { 
   ProcesarPago(efectivo:string): void{
       let exec= parseFloat(efectivo)-parseFloat(this.total);
       }
}

class tarjeta extends pago{

    ProcesarPago(saldo: string): void {
        if(saldo>= this.total){
            let exec= parseFloat(saldo)-parseFloat(this.total);
            let nuevoSaldo= exec;
        }
        else{
            console.log("Declinada");
        }
    }
}
class tranferencia extends pago {

    ProcesarPago(saldo: string): void {
        let exec= parseFloat(this.total)- parseFloat(this.total);
        console.log("cuenta a $"+exec)
    }
}

const efe = new efectivo("20");
const tar = new  tarjeta("20");
const tra = new tranferencia("20");
efe.ProcesarPago('120');
tar.ProcesarPago("120");
tra.ProcesarPago("120");