abstract class Empleado {
    salario: string;

    constructor(salario: string){
        this.salario = salario;
    }

    abstract CalcularSalario(a: string): void;
}

class Horas extends Empleado {
    CalcularSalario(hora: string): void {
        let sueldo = parseFloat(hora) * parseFloat(this.salario);
        console.log("Salario por horas: $" + sueldo);
    }
}

class fijos extends Empleado {
    CalcularSalario(saldo: string): void {
        let base = parseFloat(this.salario);
        let dinero = parseFloat(saldo);

        if (dinero >= base) {
            let exec = dinero - base;
            console.log("Salario fijo restante: $" + exec);
        } else {
            console.log("Declinada");
        }
    }
}

class comision extends Empleado {
    CalcularSalario(saldo: string): void {
        let ventas = parseFloat(saldo);
        let porcentaje = parseFloat(this.salario);

        let exec = ventas * (porcentaje / 100);
        console.log("Salario por comisión: $" + exec);
    }
}

const hor = new Horas("10");      
const fij = new fijos("500");     
const com = new comision("10");   

hor.CalcularSalario('8');    
fij.CalcularSalario('800');
com.CalcularSalario('800');