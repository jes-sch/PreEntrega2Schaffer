/* DATOS PAGA EL LOGIN:
user: TutorCorrector --> este dato aún no es necesario, pero me servirá más adelante.
password: h0mer0
 */

alert(
"Hola Tutor Corrector, esta es mi 2da Entrega del Proyecto Final de JS para que corrija. Gracias, vuelva prontos."
);

/* let savedUser = "TutorCorrector"; */
//El savedUser me lo guardo para usar más adelante

let savedPassword = "h0mer0";

let nombreUser = prompt("Ingresá tu nombre");

alert("Hola " + nombreUser + ", bienvenido/a a mi proyecto (:");

let ingresar = false;
function login () {

    for (let i = 2; i >= 0; i--) {
        let userPassword = prompt("Ingresá tu Contraseña");
        if (userPassword == savedPassword) {
            alert ("Ingreso exitoso");
            ingresar = true;
            break;
        } else {
            alert ("Contraseña incorrecta");
        }
    }
}

login()
const productosEnVenta = [{
    detalle: "Remera",
    precio: 6000,
    cuotas: 6600
},
{
    detalle: "Pantalón",
    precio: 12000,
    cuotas: 12000
},
]

productosEnVenta.push({ detalle: "Hoodie", precio: 8400, cuotas: 9000 });
console.log(productosEnVenta);

if (ingresar==true){
    alert ("Ahora te voy a pedir unos datos");
    let productoElegido = parseInt(prompt("Elegí la opción que corresponda al producto que quieras comprar: \n1 - Remera \n2 - Pantalón \n3 - Hoodie"));

/*     let inflacionMensualEstimada = 6.2; --> este dato también me lo guardo para más adelante*/
    
if (productoElegido == 1) {
    alert("Pagando de contado te sale $ " + productosEnVenta[0].precio + " Pagando en cuotas te sale $ " + productosEnVenta[0].cuotas);
    } else if (productoElegido == 2) {
        alert("Pagando de contado te sale $ " + productosEnVenta[1].precio + " Pagando en cuotas te sale $ " + productosEnVenta[1].cuotas);
    } else if (productoElegido == 3) {
        alert("Pagando de contado te sale $ " + productosEnVenta[2].precio + " Pagando en cuotas te sale $ " + productosEnVenta[2].cuotas);
    } else {
        alert ("Elegiste una opción INEXISTENTE");
    }

}else{
    alert ("Tu usuario quedó inhabilitado. Comunicate con el administrador.");
}

/*     alert('Pagando en 3 cuotas, el valor de cada una va a ser de $ ' + (precioEnCuotas /3) + (inflacionMensualEstimada*3)); */

alert("FIN DE LA ENTREGA HASTA AHORA. Programa en desarrollo ;)");