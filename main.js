class Cuenta {           //La clase cuenta 
    constructor(titular, dinero) {        
        this._titular = titular;      //Propiedad  
        this._dinero = dinero;                //Propiedad
        this._moneda = '$';                   //Propiedad
    }
    Retirar(mont){          //método para retirar dinero
        if (mont <= this._dinero) {
            this._dinero -= mont;
            console.log('¡Retiro de dinero realizado Exitosamente!')
        } else {
            console.error('¡Fondo insuficiente para realizar el retiro!')
        }
    }
    Ingresar(mont) {        //método parar agregar  dinero
        if(mont > 0) {
            this._dinero += mont;
            console.log('Deposito realizado Exitosamente')
        }
    }
    VerSaldo () {           //método parar ver el dinero disponible en la cuenta 
        console.log(`Saldo Disponible: ${this._dinero}${this._moneda}`);
        return this._dinero;
    }
}

const cuenta1 = new Cuenta("David López", 670);    //instancia de la clase 'Cuenta'
const cuenta2 = new Cuenta("Daniel Ortiz", 2000);    //instancia de la clase 'Cuenta'
const cuenta3 = new Cuenta("Jorge Herrera", 150);    //instancia de la clase 'Cuenta'

cuenta1.VerSaldo();             //Saldo Disponible 670$
cuenta2.Retirar(1500);          //¡Retiro de dinero realizado Exitosamente!
cuenta3.Ingresar(13);           //Deposito realizado Exitosamente



class Factura {                //clase factura
    constructor (cantidad, precio_unitario) {
       this._cantidad = cantidad;
       this._precio = precio_unitario;
       this._subtotal = this._cantidad * this._precio;
       this._iva = 0.16 * this._subtotal;
       this._total_factura = this._iva + this._subtotal;
    }
    Mostrar () {         //Método
        return `Cantidad: ${this._cantidad} \n Precio unitario: ${this._precio} \n
            Subtotal: ${this._subtotal} \n IVA: ${this._iva} \n
            Total Factura: ${this._total_factura}`;
    }
}


const factura1 = new Factura(30, 32.5);      //instancia de la clase 'Factura'
const factura2 = new Factura(56, 8.9);       //instancia de la clase 'Factura'
const factura3 = new Factura(100, 67.9);     //instancia de la clase 'Factura'

console.log(factura1.Mostrar());
console.log(factura2.Mostrar());
console.log(factura3.Mostrar());









