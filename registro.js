
let cantidadLitros = +prompt("¿Cantidad de litros");
let precioGalon = +prompt("¿precio por galon?");


let cantidadGalon=cantidadLitros/ 3.785;
let precioTotal=cantidadGalon*precioGalon;

console.log(`La cantidad de leche es: ${cantidadLitros} 
Preci0 por galon es: ${precioGalon}
Cantidad de Galon es: ${cantidadGalon}
El precio total es : ${precioTotal}`)


