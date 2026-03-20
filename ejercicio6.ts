
abstract class notificacion{

    mensajes: string;
    constructor(mensajes: string){
        this.mensajes = mensajes
    }
  abstract enviar(): void;
} 

class Email extends notificacion { 
   enviar(): void{
       console.log("Envial email: " + this.mensajes );
       }
}

class SMS extends notificacion{
    enviar(): void {
      console.log("Envial sms: " + this.mensajes);
    }
}
class WhatsApp extends notificacion{
    enviar(): void {
       console.log("Envial whastapp: " + this.mensajes);
    }
}

const ema = new Email("Hola desde Email");
const sm = new  SMS("Hola desde SMS");
const wha = new WhatsApp("Hola desde WhatsApp");
ema.enviar();
sm.enviar();
wha.enviar();