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

function login () {
    let ingresar = false;

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

    return ingresar;
}

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

if (login()){
    alert ("Ahora te voy a pedir unos datos");
    let productoElegido = parseInt(prompt("Elegí la opción que corresponda al producto que quieras comprar: \n1 - Remera \n2 - Pantalón \n3 - Hoodie"));

/*     let inflacionMensualEstimada = 6.2; */
    
    if (productoElegido == 1) {
        alert("Pagando de contado te sale $ " + productosEnVenta.precio + " Pagando en cuotas te sale $ " + productosEnVenta.cuotas);
    } else if (productoElegido == 2) {
        alert("Pagando de contado te sale $ " + productosEnVenta[precio] + " Pagando en cuotas te sale $ " + productosEnVenta[cuotas]);
    } else if (productoElegido == 3) {
        alert("Pagando de contado te sale $ " + productosEnVenta[precio] + " Pagando en cuotas te sale $ " + productosEnVenta[cuotas]);
    } else {
        alert ("Elegiste una opción INEXISTENTE");
    }


}else{
    alert ("Tu usuario quedó inhabilitado. Comunicate con el administrador.");
}

/* if (productoElegido == 1) {
    alert("Pagando de contado te sale $ " + productosEnVenta.precio + " Pagando en cuotas te sale $ " + productosEnVenta.cuotas);
} else if (productoElegido == 2) {
    alert("Pagando de contado te sale $ " + productosEnVenta[precio] + " Pagando en cuotas te sale $ " + productosEnVenta[cuotas]);
} else if (productoElegido == 3) {
    alert("Pagando de contado te sale $ " + productosEnVenta[precio] + " Pagando en cuotas te sale $ " + productosEnVenta[cuotas]);
} else {
    alert ("Elegiste una opción INEXISTENTE");
} */

/* if (login()){
    alert ("Te voy a pedir unos datos para determinar si te conviene comprar al contado o en cuotas,  y ganarle a la inflación (guiño guiño)");
    let inflacionMensualEstimada = 6.2;
    let precioEfectivo = parseInt(prompt("Ingresá el PRECIO TOTAL al CONTADO/EFECTIVO: "));
    let precioEnCuotas = parseInt(prompt("Ingresá el PRECIO TOTAL en CUOTAS: "));
    let cuotas = parseInt(prompt("Elegí la opción que corresponda a la cantidad de cuotas: \n1 - 3 cuotas \n2 - 6 cuotas \n3 - 9 cuotas \n4 - 12 cuotas"));
    
if (cuotas == 1) {
    alert('Pagando en 3 cuotas, el valor de cada una va a ser de $ ' + (precioEnCuotas /3) + (inflacionMensualEstimada*3));
} else if (cuotas == 2) {
    alert('Pagando en 6 cuotas, el valor de cada una va a ser de $ ' + (precioEnCuotas /6) + (inflacionMensualEstimada*6));
} else if (cuotas == 3) {
    alert('Pagando en 9 cuotas, el valor de cada una va a ser de $ ' + (precioEnCuotas /9) + (inflacionMensualEstimada*9));
} else if (cuotas == 4) {
    alert('Pagando en 12 cuotas, el valor de cada una va a ser de $ ' + (precioEnCuotas /12) + (inflacionMensualEstimada*12));
} else {
    alert ("Elegiste una opción INEXISTENTE");
}


}else{
    alert ("Tu usuario quedó inhabilitado. Comunicate con el administrador.");
}

alert("FIN DE LA ENTREGA HASTA AHORA. Programa en desarrollo ;)"); */


/*     alert('Pagando en 3 cuotas, el valor de cada una va a ser de $ ' + (precioEnCuotas /3) + (inflacionMensualEstimada*3)); */

alert("FIN DE LA ENTREGA HASTA AHORA. Programa en desarrollo ;)");