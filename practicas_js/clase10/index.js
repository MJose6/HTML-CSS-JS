//desafio 1
const accionUsuario = "red";

switch (accionUsuario) {
    case "red":
        console.log("el usuario hizo click en el color rojo")
        break;

    case "blue":
        console.log("el usuario hizo click en el color azul")
        break;

    case "yellow":
        console.log("el usuario hizo click en el color amarillo")
        break;

    case "green":
        console.log("el usuario hizo click en el color verde")
        break;
    
    default:
        console.error("error, eso no existe")
        break;
}

//desafio 2
const ids = ["blue", "red", "green", "yellow"];
const secuencia = ["blue", "red", "yellow", "blue"];

const valorAleatorio = Math.floor(Math.random() * ids.lenght);

const idAleatorio = ids[valorAleatorio];

secuencia.push(idAleatorio);
