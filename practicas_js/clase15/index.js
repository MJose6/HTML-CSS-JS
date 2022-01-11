//desafio 1
const productos = [
    { item: "nombre del item", precio: "$ 200", anulado: false },
    { item: "nombre del item", precio: "$ 115", anulado: false },
    { item: "nombre del item", precio: "$ 180", anulado: false },
    { item: "nombre del item", precio: "$ 100", anulado: false },
    { item: "nombre del item", precio: "$ 120", anulado: false },
    { item: "nombre del item", precio: "$ 105", anulado: true },
    { item: "nombre del item", precio: "$ 150", anulado: true },
];

let i = 0;
let total = 0;

for (i; i < productos.length; i++) {
    const producto = productos[i];

    if (!producto.anulado) {
        const precio = parseInt(producto.precio.split(" ") [1]);
        total += precio;        
    }
    
}
console.log("el total es de" + total)

//desafio 2

const productos = [
    { item: "nombre del item", precio: "$ 200", anulado: false },
    { item: "nombre del item", precio: "$ 115", anulado: false },
    { item: "nombre del item", precio: "$ 180", anulado: false },
    { item: "nombre del item", precio: "$ 100", anulado: false },
    { item: "nombre del item", precio: "$ 120", anulado: false },
    { item: "nombre del item", precio: "$ 105", anulado: true },
    { item: "nombre del item", precio: "$ 150", anulado: true },
];

const total = productos.filter((producto) => {
    return !producto.anulado;
}).map((producto) => {
    return parseInt(producto.precio.split(" ") [1]);
}).reduce((total, precio) => {
    return total + precio;
});
console.log("el total es de" + total)
