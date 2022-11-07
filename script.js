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
const productosEnVenta = [
{
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
console.log(productosEnVenta); /* Agrego un nuevo elemento al final del array y lo muestro por consola */

productosEnVenta.push({ detalle: "Top", precio: 2500, cuotas: 3000 });
console.log(productosEnVenta); /* Agrego otro elemento más al final del array y lo muestro por consola */


if (ingresar==true){
    alert ("Ahora te voy a pedir unos datos");
    let productoElegido = parseInt(prompt("Elegí la opción que corresponda al producto que quieras comprar: \n1 - Remera \n2 - Pantalón \n3 - Hoodie \n4 - Top"));

/*     let inflacionMensualEstimada = 6.2; --> este dato también me lo guardo para más adelante*/
    
if (productoElegido == 1) {
    alert("Pagando de contado te sale $ " + productosEnVenta[0].precio + " Pagando en cuotas te sale $ " + productosEnVenta[0].cuotas);
    } else if (productoElegido == 2) {
        alert("Pagando de contado te sale $ " + productosEnVenta[1].precio + " Pagando en cuotas te sale $ " + productosEnVenta[1].cuotas);
    } else if (productoElegido == 3) {
        alert("Pagando de contado te sale $ " + productosEnVenta[2].precio + " Pagando en cuotas te sale $ " + productosEnVenta[2].cuotas);
    } else if (productoElegido == 4) {
        alert("Pagando de contado te sale $ " + productosEnVenta[3].precio + " Pagando en cuotas te sale $ " + productosEnVenta[3].cuotas);
    } else {
        alert ("Elegiste una opción INEXISTENTE");
    }

}else{
    alert ("Tu usuario quedó inhabilitado. Comunicate con el administrador.");
}

/* Métodos de búsqueda y filtrado, para cumplir con la rúbrica de evaluación de ésta entrega*/

let buscarProductoConFind = productosEnVenta.find(productosEnVenta => productosEnVenta.detalle == "Remera");
console.log(buscarProductoConFind); /* Lo muestro por consola */

let buscarProductoConFilter = productosEnVenta.filter(productosEnVenta => productosEnVenta.precio > 8000);
console.log(buscarProductoConFilter); /* Lo muestro por consola */

/* FIN Métodos de búsqueda y filtrado*/

alert("FIN DE LA ENTREGA HASTA AHORA. Programa en desarrollo ;)");

/* FIN DEL PROGRAMA */