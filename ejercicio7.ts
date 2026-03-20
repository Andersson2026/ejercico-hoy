abstract class transporte{
    veiculo: string;
    constructor(veiculo: string){
         this.veiculo = veiculo 
    }
    abstract calcularCosto(a: string): void;
}

class taxi extends transporte{
   calcularCosto(taxie: string): void {
       let base = parseFloat(this.veiculo);
        let distancia = parseFloat(taxie);

        let costo = base + (distancia * 2)
            console.log("costo taxie: $" + costo);

    }
   }

class autobus extends transporte{
 calcularCosto(autobus: string): void {
     let base = parseFloat(this.veiculo);
        let distancia = parseFloat(autobus);

        let costo = base + (distancia * 1)
            console.log("costo autobus : $" + costo);
        }
 
}

class uber extends transporte{
calcularCosto(uber: string): void {
    let base = parseFloat(this.veiculo);
        let distancia = parseFloat(uber);

        let costo = base + (distancia * 1.5)
            console.log("costo taxie: $" + costo);
    
        
    }
}
const tax = new taxi("3");
const aut = new  autobus("1");
const ube = new uber("2");
tax.calcularCosto("10");
aut.calcularCosto("10");
ube.calcularCosto("10");