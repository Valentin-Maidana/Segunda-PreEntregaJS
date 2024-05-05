
alert("Bienvenido a Iphone.CdelU\n\nTenemos todos los modelos de iphone comenzando desde el Iphone 8 en adelante.")

const productos = [
    {nombre: "Iphone 8"},
    {nombre: "Iphone X"},
    {nombre: "Iphone XR"},
    {nombre: "Iphone 11"},
    {nombre: "Iphone 12"},
    {nombre: "Iphone 13"},
    {nombre: "Iphone 14"},
    {nombre: "Iphone 15"}
];


const mostrarProductos = () => {
    let listaProductos = "Lista de productos:\n\n";
    productos.forEach((producto) => {
        listaProductos += `${producto.nombre}\n`;
    });
    alert(listaProductos);

    const productoElegido = prompt("Ingrese el nombre del iPhone que desea comprar:");
    return productoElegido;
};

const iphoneElegido = mostrarProductos();

let productoEncontrado = false;
for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre === iphoneElegido) {
        alert(`Seleccionaste el ${iphoneElegido}`);
        productoEncontrado = true;
        break;
    }
}

if (!productoEncontrado) {
    alert("El producto que deseas no está disponible");
}

