//desafio 1
const mes = "agosto";

if (mes === "febrero") {
    console.log("el mes tiene 28 dias");
} else if (mes === "abril" || mes === "junio" || mes === "septiembre"
|| mes === "noviembre") {
    console.log("el mes tiene 30 dias");
} else {
    console.log("el mes tiene 31 dias");
}


//desafio 2
const letra = "e";

if (letra === "a" || letra === "e" ||
letra === "i" || letra === "o" || letra === "u") {
    console.log("la letra" + (letra) + "es una vocal");
} else {
    console.log("la letra" + (letra) + "no es una vocal");
}

//desfio 3
const antiguedad = 5;
const sueldo = 40000;
let aumento = 0;

if (antiguedad >= 10) {
    console.log("el aumento es de un 10%");
    aumento = sueldo + (sueldo * 10 / 100);
} else if (antiguedad < 10 || antiguedad >= 5) {
    console.log("el aumento sera de un 7%");
    aumento = sueldo + (sueldo * 7 / 100);
} else if (antiguedad < 5 || antiguedad >= 3) {
    console.log("el aumento sera de un 5%");
    aumento = sueldo + (sueldo * 5 / 100);
} else {
    console.log("el aumento sera de un 3%");
}

console.log("el sueldo en base a la antiguedad es de" + (aumento));
